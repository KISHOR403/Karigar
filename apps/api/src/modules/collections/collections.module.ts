import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CollectionsService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    try {
      return await this.db.client.collection.findMany({
        where: { isEditorial: true },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      return [];
    }
  }

  async findBySlug(slug: string) {
    return this.db.client.collection.findUnique({
      where: { slug },
      include: {
        products: {
          include: {
            product: {
              include: { images: true, artisan: true },
            },
          },
        },
      },
    });
  }
}

@ApiTags('Collections')
@Controller({ path: 'collections', version: '1' })
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Get()
  @ApiOperation({ summary: 'List curated editorial portfolios' })
  async findAll() {
    return this.collectionsService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get collection details and curated objects' })
  async findBySlug(@Param('slug') slug: string) {
    return this.collectionsService.findBySlug(slug);
  }
}

@Module({
  controllers: [CollectionsController],
  providers: [CollectionsService],
  exports: [CollectionsService],
})
export class CollectionsModule {}
