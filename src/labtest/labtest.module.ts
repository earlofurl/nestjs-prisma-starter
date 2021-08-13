import { Module } from '@nestjs/common';
import { LabtestService } from './labtest.service';
import { LabtestResolver } from './labtest.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LabtestResolver, LabtestService],
})
export class LabtestModule {}
