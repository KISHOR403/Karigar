import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ArtisansService } from './artisans.service';

@ApiTags('Artisans')
@Controller({ path: 'artisans', version: '1' })
export class ArtisansController {
  constructor(private readonly artisansService: ArtisansService) {}

  @Get()
  @ApiOperation({ summary: 'List verified master artisans with pagination and regional filtering' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'state', required: false, type: String })
  @ApiQuery({ name: 'craft', required: false, type: String })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiResponse({ status: 200, description: 'Paginated master artisan profiles' })
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('state') state?: string,
    @Query('craft') craft?: string,
    @Query('search') search?: string,
  ) {
    return this.artisansService.findAll({ page, limit, state, craft, search });
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get detailed artisan atelier profile with process records and catalog' })
  @ApiResponse({ status: 200, description: 'Artisan atelier details' })
  @ApiResponse({ status: 404, description: 'Artisan not found' })
  async findBySlug(@Param('slug') slug: string) {
    return this.artisansService.findBySlug(slug);
  }
}
