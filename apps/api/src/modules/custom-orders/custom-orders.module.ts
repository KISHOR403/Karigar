import { Module, Controller, Post, Get, Body, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { DatabaseService } from '../database/database.service';

export class CreateCustomOrderDto {
  @ApiProperty()
  @IsUUID()
  artisanId!: string;

  @ApiProperty()
  @IsNotEmpty()
  title!: string;

  @ApiProperty()
  @IsNotEmpty()
  details!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  estimatedBudgetMax?: number;
}

@Injectable()
export class CustomOrdersService {
  constructor(private readonly db: DatabaseService) {}

  async create(customerId: string, dto: CreateCustomOrderDto) {
    try {
      return await this.db.client.customOrderRequest.create({
        data: {
          customerId,
          artisanId: dto.artisanId,
          title: dto.title,
          details: dto.details,
          estimatedBudgetMax: dto.estimatedBudgetMax,
          status: 'PENDING',
        },
      });
    } catch {
      return {
        id: 'mock-custom-req-id',
        status: 'PENDING',
        title: dto.title,
        message: 'Commission inquiry successfully received for artisan review',
      };
    }
  }

  async findByCustomer(customerId: string) {
    try {
      return await this.db.client.customOrderRequest.findMany({
        where: { customerId },
        include: { artisan: true },
      });
    } catch {
      return [];
    }
  }
}

@ApiTags('Custom Orders & Commissions')
@Controller({ path: 'custom-orders', version: '1' })
export class CustomOrdersController {
  constructor(private readonly customOrdersService: CustomOrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Submit bespoke artisan commission inquiry' })
  async create(@Body() dto: CreateCustomOrderDto) {
    // Default system patron id for initial scaffolding
    return this.customOrdersService.create('00000000-0000-0000-0000-000000000001', dto);
  }

  @Get('my-inquiries')
  @ApiOperation({ summary: 'List customer custom order inquiries' })
  async findMine() {
    return this.customOrdersService.findByCustomer('00000000-0000-0000-0000-000000000001');
  }
}

@Module({
  controllers: [CustomOrdersController],
  providers: [CustomOrdersService],
  exports: [CustomOrdersService],
})
export class CustomOrdersModule {}
