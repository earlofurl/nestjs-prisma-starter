import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockResolver } from './stock.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [StockResolver, StockService],
})
export class StockModule {}
