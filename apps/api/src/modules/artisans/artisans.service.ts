import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ArtisansService {
  constructor(private readonly db: DatabaseService) {}

  async findAll(query?: { state?: string; craft?: string; search?: string; page?: number; limit?: number }) {
    const page = Number(query?.page) || 1;
    const limit = Math.min(Number(query?.limit) || 20, 100);
    const skip = (page - 1) * limit;

    try {
      const where: Record<string, unknown> = { deletedAt: null };
      if (query?.state) {
        where.location = { state: { contains: query.state, mode: 'insensitive' } };
      }
      if (query?.craft) {
        where.craftName = { contains: query.craft, mode: 'insensitive' };
      }
      if (query?.search) {
        where.OR = [
          { artisanName: { contains: query.search, mode: 'insensitive' } },
          { craftName: { contains: query.search, mode: 'insensitive' } },
          { bio: { contains: query.search, mode: 'insensitive' } },
        ];
      }

      const [items, totalItems] = await Promise.all([
        this.db.client.artisanProfile.findMany({
          where,
          include: {
            location: true,
            verification: true,
            media: { orderBy: { displayOrder: 'asc' } },
          },
          skip,
          take: limit,
          orderBy: { isFeatured: 'desc' },
        }),
        this.db.client.artisanProfile.count({ where }),
      ]);

      return {
        items,
        meta: {
          page,
          limit,
          totalItems,
          totalPages: Math.ceil(totalItems / limit),
          hasNextPage: page * limit < totalItems,
          hasPrevPage: page > 1,
        },
      };
    } catch {
      // Fallback for bootstrap / mock environment when db is initializing
      return {
        items: [],
        meta: {
          page,
          limit,
          totalItems: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };
    }
  }

  async findBySlug(slug: string) {
    try {
      const artisan = await this.db.client.artisanProfile.findUnique({
        where: { slug },
        include: {
          location: true,
          verification: true,
          media: { orderBy: { displayOrder: 'asc' } },
          products: {
            where: { status: 'PUBLISHED' },
            include: {
              images: true,
              variants: true,
              category: true,
            },
          },
        },
      });

      if (!artisan) {
        throw new NotFoundException(`Artisan atelier with slug '${slug}' not found`);
      }

      return artisan;
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new NotFoundException(`Artisan atelier '${slug}' could not be loaded`);
    }
  }
}
