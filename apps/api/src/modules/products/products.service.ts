import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  async findAll(query?: {
    categorySlug?: string;
    artisanId?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    const page = Number(query?.page) || 1;
    const limit = Math.min(Number(query?.limit) || 20, 100);
    const skip = (page - 1) * limit;

    try {
      const where: Record<string, unknown> = {
        status: 'PUBLISHED',
        deletedAt: null,
      };

      if (query?.categorySlug) {
        where.category = { slug: query.categorySlug };
      }
      if (query?.artisanId) {
        where.artisanId = query.artisanId;
      }
      if (query?.search) {
        where.OR = [
          { title: { contains: query.search, mode: 'insensitive' } },
          { shortDescription: { contains: query.search, mode: 'insensitive' } },
          { craftTechnique: { contains: query.search, mode: 'insensitive' } },
        ];
      }

      const [items, totalItems] = await Promise.all([
        this.db.client.product.findMany({
          where,
          include: {
            images: { orderBy: { displayOrder: 'asc' } },
            category: true,
            artisan: {
              select: {
                id: true,
                artisanName: true,
                slug: true,
                craftName: true,
                avatarUrl: true,
                location: true,
              },
            },
            variants: true,
          },
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' },
        }),
        this.db.client.product.count({ where }),
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
      const product = await this.db.client.product.findUnique({
        where: { slug },
        include: {
          images: { orderBy: { displayOrder: 'asc' } },
          category: true,
          artisan: {
            include: {
              location: true,
              verification: true,
            },
          },
          variants: true,
          reviews: {
            take: 10,
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!product) {
        throw new NotFoundException(`Craft object with slug '${slug}' not found`);
      }

      return product;
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new NotFoundException(`Craft object '${slug}' could not be loaded`);
    }
  }
}
