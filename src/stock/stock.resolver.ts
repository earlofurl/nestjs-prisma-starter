import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StockService } from './stock.service';
import { Stock } from './entities/stock.entity';
import { CreateStockInput } from './dto/create-stock.input';
import { UpdateStockInput } from './dto/update-stock.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Stock)
@UseGuards(GqlAuthGuard)
export class StockResolver {
  constructor(
    private stockService: StockService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => Stock)
  createStock(@Args('createStockInput') createStockInput: CreateStockInput) {
    return this.stockService.create(createStockInput);
  }

  @Query(() => [Stock], { name: 'stocks' })
  findAll() {
    return this.stockService.findAll();
  }

  @Query(() => Stock, { name: 'stock' })
  findOne(
    @Args('findOneStockInput', { type: () => String })
    findOneStockInput: Prisma.StockWhereUniqueInput
  ) {
    return this.stockService.findOne(findOneStockInput);
  }

  @Mutation(() => Stock)
  updateStock(@Args('updateStockInput') updateStockInput: UpdateStockInput) {
    return this.stockService.update(updateStockInput.id, updateStockInput);
  }

  @Mutation(() => Stock)
  removeStock(
    @Args('removeOneStockInput', { type: () => String })
    removeOneStockInput: Prisma.StockWhereUniqueInput
  ) {
    return this.stockService.remove(removeOneStockInput);
  }

  @ResolveField('lineItems')
  lineItems(@Parent() stock: Stock) {
    return this.prisma.stock
      .findUnique({ where: { id: stock.id } })
      .lineItems();
  }
}
