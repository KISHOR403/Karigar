import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { prisma, PrismaClient } from '@karigar/database';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  public readonly client: PrismaClient = prisma;

  async onModuleInit() {
    try {
      await this.client.$connect();
    } catch {
      // Allow API to boot even if DB is still starting up in local dev
    }
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
