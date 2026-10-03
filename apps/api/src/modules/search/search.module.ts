import { Module, Controller, Get, Query, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SearchService {
  constructor(private readonly db: DatabaseService) {}

  async searchAll(q: string) {
    try {
      const [artisans, products] = await Promise.all([
        this.db.client.artisanProfile.findMany({
          where: {
            OR: [
              { artisanName: { contains: q, mode: 'insensitive' } },
              { craftName: { contains: q, mode: 'insensitive' } },
            ],
          },
          take: 5,
        }),
        this.db.client.product.findMany({
          where: {
            OR: [
              { title: { contains: q, mode: 'insensitive' } },
              { craftTechnique: { contains: q, mode: 'insensitive' } },
            ],
          },
          take: 8,
          include: { images: true, artisan: true },
        }),
      ]);

      return { artisans, products };
    } catch {
      return { artisans: [], products: [] };
    }
  }
}

@ApiTags('Search')
@Controller({ path: 'search', version: '1' })
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Global search across artisans, crafts, and objects' })
  @ApiQuery({ name: 'q', required: true, type: String })
  async search(@Query('q') q: string) {
    return this.searchService.searchAll(q || '');
  }
}

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
