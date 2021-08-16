import { Injectable } from '@nestjs/common';
import { CreateLineitemInput } from './dto/create-lineitem.input';
import { UpdateLineitemInput } from './dto/update-lineitem.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LineitemService {
  constructor(private prisma: PrismaService) {}

  create(createLineitemInput: CreateLineitemInput) {
    // 'This action adds a new lineitem'
    return this.prisma.lineItem.create({
      data: {
        ...createLineitemInput,
      },
    });
  }

  findAll() {
    // `This action returns all lineitem`
    return this.prisma.lineItem.findMany();
  }

  findOne(id: Prisma.LineItemWhereUniqueInput) {
    // `This action returns a #${id} lineitem`
    return this.prisma.lineItem.findUnique({
      where: id,
    });
  }

  update(id: string, updateLineitemInput: UpdateLineitemInput) {
    // `This action updates a #${id} lineitem`
    return this.prisma.lineItem.update({
      data: updateLineitemInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.LineItemWhereUniqueInput) {
    // `This action removes a #${id} lineitem`
    return this.prisma.lineItem.delete({
      where: id,
    });
  }
}
