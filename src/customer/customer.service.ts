import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  create(createCustomerInput: CreateCustomerInput) {
    // 'This action adds a new customer';
    return this.prisma.customer.create({
      data: {
        ...createCustomerInput,
      },
    });
  }

  findAll() {
    // `This action returns all customers`;
    return this.prisma.customer.findMany();
  }

  findOne(id: Prisma.CustomerWhereUniqueInput) {
    // `This action returns a #${id} customer`;
    return this.prisma.customer.findUnique({
      where: id,
    });
  }

  update(id: string, updateCustomerInput: UpdateCustomerInput) {
    // `This action updates a #${id} customer`;
    return this.prisma.customer.update({
      data: updateCustomerInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.CustomerWhereUniqueInput) {
    // `This action removes a #${id} customer`;
    return this.prisma.customer.delete({
      where: id,
    });
  }
}
