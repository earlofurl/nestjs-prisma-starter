import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(createOrderInput: CreateOrderInput) {
    // 'This action adds a new order'
    return this.prisma.order.create({
      data: {
        ...createOrderInput,
      },
    });
  }

  findAll() {
    // `This action returns all order`
    return this.prisma.order.findMany();
  }

  findOne(id: Prisma.OrderWhereUniqueInput) {
    // `This action returns a #${id} order`
    return this.prisma.order.findUnique({
      where: id,
    });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    // `This action updates a #${id} order`
    return this.prisma.order.update({
      data: updateOrderInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.OrderWhereUniqueInput) {
    // `This action removes a #${id} order`
    return this.prisma.order.delete({
      where: id,
    });
  }
}
