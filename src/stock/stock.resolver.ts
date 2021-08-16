import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StockService } from './stock.service';
import { Stock } from './entities/stock.entity';
import { CreateStockInput } from './dto/create-stock.input';
import { UpdateStockInput } from './dto/update-stock.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Stock)
@UseGuards(GqlAuthGuard)
export class StockResolver {
  constructor(private readonly stockService: StockService) {}

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
}
