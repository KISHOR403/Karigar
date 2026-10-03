import { Module, Controller, Post, Body, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly db: DatabaseService) {}

  async createPaymentIntent(orderId: string, amount: number) {
    return {
      orderId,
      amount,
      currency: 'INR',
      status: 'INTENT_INITIALIZED',
      directArtisanProceedsPercentage: 92, // Platform fair pledge
    };
  }
}

@ApiTags('Payments Architecture')
@Controller({ path: 'payments', version: '1' })
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('intent')
  @ApiOperation({ summary: 'Initialize secure payment transaction intent' })
  async createIntent(@Body() body: { orderId: string; amount: number }) {
    return this.paymentsService.createPaymentIntent(body.orderId, body.amount);
  }
}

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
