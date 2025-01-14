import { Module } from '@nestjs/common';
import { FacilityService } from './facility.service';
import { FacilityResolver } from './facility.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FacilityResolver, FacilityService],
})
export class FacilityModule {}
