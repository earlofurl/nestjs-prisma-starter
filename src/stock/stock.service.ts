import { Injectable } from '@nestjs/common';
import { CreateStockInput } from './dto/create-stock.input';
import { UpdateStockInput } from './dto/update-stock.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StockService {
  constructor(private prisma: PrismaService) {}

  create(createStockInput: CreateStockInput) {
    // 'This action adds a new stock'
    return this.prisma.stock.create({
      data: {
        ...createStockInput,
      },
    });
  }

  findAll() {
    // `This action returns all stock`
    return this.prisma.stock.findMany();
  }

  findOne(id: Prisma.StockWhereUniqueInput) {
    // `This action returns a #${id} stock`
    return this.prisma.stock.findUnique({
      where: id,
    });
  }

  update(id: string, updateStockInput: UpdateStockInput) {
    // `This action updates a #${id} stock`
    return this.prisma.stock.update({
      data: updateStockInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.StockWhereUniqueInput) {
    // `This action removes a #${id} stock`
    return this.prisma.stock.delete({
      where: id,
    });
  }
}
