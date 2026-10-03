import { Module, Controller, Get, Post, Body, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CartService {
  constructor(private readonly db: DatabaseService) {}

  async getCart(sessionIdOrUserId: string) {
    return {
      items: [],
      subtotal: 0,
      currency: 'INR',
    };
  }
}

@ApiTags('Cart')
@Controller({ path: 'cart', version: '1' })
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Get current patron cart items' })
  async getCart() {
    return this.cartService.getCart('session-mock');
  }
}

@Module({
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
