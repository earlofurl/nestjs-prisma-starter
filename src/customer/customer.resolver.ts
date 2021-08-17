import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Customer)
@UseGuards(GqlAuthGuard)
export class CustomerResolver {
  constructor(
    private customerService: CustomerService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput
  ) {
    return this.customerService.create(createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll() {
    return this.customerService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(
    @Args('findOneCustomerInput', { type: () => String })
    findOneCustomerInput: Prisma.CustomerWhereUniqueInput
  ) {
    return this.customerService.findOne(findOneCustomerInput);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput
  ) {
    return this.customerService.update(
      updateCustomerInput.id,
      updateCustomerInput
    );
  }

  @Mutation(() => Customer)
  removeCustomer(
    @Args('removeOneCustomerInput', { type: () => String })
    removeOneCustomerInput: Prisma.CustomerWhereUniqueInput
  ) {
    return this.customerService.remove(removeOneCustomerInput);
  }

  @ResolveField('facilities')
  facilities(@Parent() customer: Customer) {
    return this.prisma.customer
      .findUnique({ where: { id: customer.id } })
      .facilities();
  }
}