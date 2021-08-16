import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LineitemService } from './lineitem.service';
import { Lineitem } from './entities/lineitem.entity';
import { CreateLineitemInput } from './dto/create-lineitem.input';
import { UpdateLineitemInput } from './dto/update-lineitem.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Lineitem)
@UseGuards(GqlAuthGuard)
export class LineitemResolver {
  constructor(private readonly lineitemService: LineitemService) {}

  @Mutation(() => Lineitem)
  createLineitem(
    @Args('createLineitemInput') createLineitemInput: CreateLineitemInput
  ) {
    return this.lineitemService.create(createLineitemInput);
  }

  @Query(() => [Lineitem], { name: 'lineitems' })
  findAll() {
    return this.lineitemService.findAll();
  }

  @Query(() => Lineitem, { name: 'lineitem' })
  findOne(
    @Args('findOneLineItemInput', { type: () => String })
    findOneLineItemInput: Prisma.LineItemWhereUniqueInput
  ) {
    return this.lineitemService.findOne(findOneLineItemInput);
  }

  @Mutation(() => Lineitem)
  updateLineitem(
    @Args('updateLineitemInput') updateLineitemInput: UpdateLineitemInput
  ) {
    return this.lineitemService.update(
      updateLineitemInput.id,
      updateLineitemInput
    );
  }

  @Mutation(() => Lineitem)
  removeLineitem(
    @Args('removeOneLineItemInput', { type: () => String })
    removeOneLineItemInput: Prisma.LineItemWhereUniqueInput
  ) {
    return this.lineitemService.remove(removeOneLineItemInput);
  }
}
