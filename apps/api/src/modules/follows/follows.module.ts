import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class FollowsService {
  constructor(private readonly db: DatabaseService) {}

  async getFollowing(userId: string) {
    try {
      return await this.db.client.follow.findMany({
        where: { userId },
        include: { artisan: true },
      });
    } catch {
      return [];
    }
  }
}

@ApiTags('Follows & Patronage')
@Controller({ path: 'follows', version: '1' })
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Get()
  @ApiOperation({ summary: 'Get followed artisans' })
  async getFollowing() {
    return this.followsService.getFollowing('00000000-0000-0000-0000-000000000001');
  }
}

@Module({
  controllers: [FollowsController],
  providers: [FollowsService],
  exports: [FollowsService],
})
export class FollowsModule {}
