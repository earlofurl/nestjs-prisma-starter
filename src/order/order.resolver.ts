import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Order)
@UseGuards(GqlAuthGuard)
export class OrderResolver {
  constructor(
    private orderService: OrderService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(
    @Args('findOneOrderInput', { type: () => String })
    findOneOrderInput: Prisma.OrderWhereUniqueInput
  ) {
    return this.orderService.findOne(findOneOrderInput);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.orderService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(
    @Args('removeOneCustomerInput', { type: () => String })
    removeOneCustomerInput: Prisma.OrderWhereUniqueInput
  ) {
    return this.orderService.remove(removeOneCustomerInput);
  }

  @ResolveField('lineItems')
  lineItems(@Parent() order: Order) {
    return this.prisma.order
      .findUnique({ where: { id: order.id } })
      .lineItems();
  }
}
