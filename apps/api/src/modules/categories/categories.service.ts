import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    try {
      return await this.db.client.category.findMany({
        orderBy: { displayOrder: 'asc' },
        include: { _count: { select: { products: true } } },
      });
    } catch {
      return [];
    }
  }

  async findBySlug(slug: string) {
    return this.db.client.category.findUnique({
      where: { slug },
      include: {
        products: {
          take: 20,
          include: { images: true, artisan: true },
        },
      },
    });
  }
}
