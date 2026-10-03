import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ShippingService {
  constructor(private readonly db: DatabaseService) {}

  async trackShipment(trackingNumber: string) {
    return {
      trackingNumber,
      carrier: 'Specialized Artisan Fine Arts Courier',
      status: 'IN_TRANSIT',
      estimatedDelivery: '2026-10-08T18:00:00Z',
      packaging: 'Museum-grade acid-free archival casing with temperature monitoring',
    };
  }
}

@ApiTags('Shipping')
@Controller({ path: 'shipping', version: '1' })
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Get('track/:trackingNumber')
  @ApiOperation({ summary: 'Track insured artisan courier dispatch' })
  async track(@Param('trackingNumber') trackingNumber: string) {
    return this.shippingService.trackShipment(trackingNumber);
  }
}

@Module({
  controllers: [ShippingController],
  providers: [ShippingService],
  exports: [ShippingService],
})
export class ShippingModule {}
