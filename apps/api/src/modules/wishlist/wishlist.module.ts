import { Module, Controller, Get, Post, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class WishlistService {
  constructor(private readonly db: DatabaseService) {}

  async getWishlist(userId: string) {
    try {
      return await this.db.client.wishlist.findMany({
        where: { userId },
        include: { product: { include: { images: true, artisan: true } } },
      });
    } catch {
      return [];
    }
  }
}

@ApiTags('Wishlist')
@Controller({ path: 'wishlist', version: '1' })
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user saved products' })
  async getWishlist() {
    return this.wishlistService.getWishlist('00000000-0000-0000-0000-000000000001');
  }
}

@Module({
  controllers: [WishlistController],
  providers: [WishlistService],
  exports: [WishlistService],
})
export class WishlistModule {}
