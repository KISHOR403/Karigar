import { Module, Controller, Get, Param, Injectable } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class StoriesService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    return [
      {
        id: 'sty-001',
        title: 'The Deep Indigo Vats of Kutch',
        slug: 'the-deep-indigo-vats-of-kutch',
        subtitle: 'Why genuine 16-stage Ajrakh printing requires three weeks, desert sun, and river chemistry.',
        readTimeMinutes: 6,
        heroImageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1200',
        artisanSlug: 'ismail-khatri-ajrakh',
        region: 'Kutch, Gujarat',
        craftName: 'Ajrakh Block Printing',
      },
      {
        id: 'sty-002',
        title: 'The Whispering Needles of Downtown Srinagar',
        slug: 'the-whispering-needles-of-downtown-srinagar',
        subtitle: 'In the wooden courtyards of Zainakadal, sozankars translate Persian poetry into half-millimeter stitches.',
        readTimeMinutes: 8,
        heroImageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200',
        artisanSlug: 'bashir-ahmad-pashmina',
        region: 'Srinagar, Kashmir',
        craftName: 'Hand-Spun Pashmina & Sozni Needlework',
      },
    ];
  }

  async findBySlug(slug: string) {
    const all = await this.findAll();
    return all.find((s) => s.slug === slug) || all[0];
  }
}

@ApiTags('Craft Stories')
@Controller({ path: 'stories', version: '1' })
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List craft chronicles & photo essays' })
  async findAll() {
    return this.storiesService.findAll();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get craft story by slug' })
  async findBySlug(@Param('slug') slug: string) {
    return this.storiesService.findBySlug(slug);
  }
}

@Module({
  controllers: [StoriesController],
  providers: [StoriesService],
  exports: [StoriesService],
})
export class StoriesModule {}
