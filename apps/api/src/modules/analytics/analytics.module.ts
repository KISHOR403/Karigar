import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly db: DatabaseService) {}

  async getArtisanMetrics(artisanId: string) {
    return {
      artisanId,
      profileViews: 1420,
      uniquePatrons: 380,
      inquiryConversionRate: 8.4,
      totalPatronageVolume: 485000,
      period: 'last_30_days',
    };
  }
}

@ApiTags('Analytics')
@Controller({ path: 'analytics', version: '1' })
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('artisan/:artisanId')
  @ApiOperation({ summary: 'Get atelier analytics and impact metrics' })
  async getMetrics(@Param('artisanId') artisanId: string) {
    return this.analyticsService.getArtisanMetrics(artisanId);
  }
}

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
