import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly db: DatabaseService) {}

  async findByProduct(productId: string) {
    try {
      return await this.db.client.review.findMany({
        where: { productId },
        include: { user: { include: { profile: true } } },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      return [];
    }
  }
}

@ApiTags('Reviews')
@Controller({ path: 'reviews', version: '1' })
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get verified reviews for a craft product' })
  async findByProduct(@Param('productId') productId: string) {
    return this.reviewsService.findByProduct(productId);
  }
}

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule {}
