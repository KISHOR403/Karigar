import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class OrdersService {
  constructor(private readonly db: DatabaseService) {}

  async findByCustomer(userId: string) {
    try {
      return await this.db.client.order.findMany({
        where: { userId },
        include: { items: { include: { product: true } }, shipments: true },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      return [];
    }
  }

  async findByArtisan(artisanId: string) {
    try {
      return await this.db.client.orderItem.findMany({
        where: { product: { artisanId } },
        include: { order: true, product: true },
      });
    } catch {
      return [];
    }
  }
}

@ApiTags('Orders')
@Controller({ path: 'orders', version: '1' })
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('my-orders')
  @ApiOperation({ summary: 'List customer orders' })
  async findMyOrders() {
    return this.ordersService.findByCustomer('00000000-0000-0000-0000-000000000001');
  }
}

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
