import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Customer)
@UseGuards(GqlAuthGuard)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

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
}
