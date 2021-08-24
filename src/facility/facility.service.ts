import { Injectable } from '@nestjs/common';
import { CreateFacilityInput } from './dto/create-facility.input';
import { UpdateFacilityInput } from './dto/update-facility.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FacilityService {
  constructor(private prisma: PrismaService) {}

  create(createFacilityInput: CreateFacilityInput) {
    // 'This action adds a new facility';
    return this.prisma.facility.create({
      data: {
        ...createFacilityInput,
      },
    });
  }

  findAll() {
    // `This action returns all facilities`;
    return this.prisma.facility.findMany();
  }

  findOne(facilityId: Prisma.FacilityWhereUniqueInput) {
    // `This action returns a #${id} facility
    return this.prisma.facility.findUnique({
      // TODO: Figure out how to tell Prisma that facilityId is definitely a string.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      where: { id: facilityId },
    });
  }

  update(id: string, updateFacilityInput: UpdateFacilityInput) {
    // `This action updates a #${id} facility`;
    return this.prisma.facility.update({
      data: updateFacilityInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.FacilityWhereUniqueInput) {
    // `This action removes a #${id} facility`;
    return this.prisma.facility.delete({
      where: id,
    });
  }
}
