import { Module } from '@nestjs/common';
import { LineitemService } from './lineitem.service';
import { LineitemResolver } from './lineitem.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LineitemResolver, LineitemService],
})
export class LineitemModule {}
