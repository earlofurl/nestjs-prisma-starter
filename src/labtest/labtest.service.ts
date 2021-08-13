import { Injectable } from '@nestjs/common';
import { CreateLabtestInput } from './dto/create-labtest.input';
import { UpdateLabtestInput } from './dto/update-labtest.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LabtestService {
  constructor(private prisma: PrismaService) {}

  create(createLabtestInput: CreateLabtestInput) {
    // 'This action adds a new labtest'
    return this.prisma.labTest.create({
      data: {
        ...createLabtestInput,
      },
    });
  }

  findAll() {
    // `This action returns all labtest`
    return this.prisma.labTest.findMany();
  }

  findOne(id: Prisma.LabTestWhereUniqueInput) {
    // `This action returns a #${id} labtest`
    return this.prisma.labTest.findUnique({
      where: id,
    });
  }

  update(id: string, updateLabtestInput: UpdateLabtestInput) {
    // `This action updates a #${id} labtest`
    return this.prisma.labTest.update({
      data: updateLabtestInput,
      where: {
        labTestResultId: id,
      },
    });
  }

  remove(id: Prisma.LabTestWhereUniqueInput) {
    // `This action removes a #${id} labtest`
    return this.prisma.labTest.delete({
      where: id,
    });
  }
}
