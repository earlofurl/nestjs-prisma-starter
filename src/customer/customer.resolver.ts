import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Customer)
@UseGuards(GqlAuthGuard)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService, private prisma: PrismaService) {}

  @Mutation(() => Customer)
  createCustomer(@Args('createCustomerInput') createCustomerInput: CreateCustomerInput) {
    return this.customerService.create(createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customer' })
  findAll() {
    return this.customerService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(@Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput) {
    return this.customerService.update(updateCustomerInput.id, updateCustomerInput);
  }

  @Mutation(() => Customer)
  removeCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.remove(id);
  }
}
