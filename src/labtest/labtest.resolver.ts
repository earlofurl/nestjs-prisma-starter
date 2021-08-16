import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabtestService } from './labtest.service';
import { Labtest } from './entities/labtest.entity';
import { CreateLabtestInput } from './dto/create-labtest.input';
import { UpdateLabtestInput } from './dto/update-labtest.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Labtest)
@UseGuards(GqlAuthGuard)
export class LabtestResolver {
  constructor(private readonly labtestService: LabtestService) {}

  @Mutation(() => Labtest)
  createLabtest(
    @Args('createLabtestInput') createLabtestInput: CreateLabtestInput
  ) {
    return this.labtestService.create(createLabtestInput);
  }

  @Query(() => [Labtest], { name: 'labtests' })
  findAll() {
    return this.labtestService.findAll();
  }

  @Query(() => Labtest, { name: 'labtest' })
  findOne(
    @Args('findOneLabtestInput', { type: () => String })
    findOneLabtestInput: Prisma.LabTestWhereUniqueInput
  ) {
    return this.labtestService.findOne(findOneLabtestInput);
  }

  @Mutation(() => Labtest)
  updateLabtest(
    @Args('updateLabtestInput') updateLabtestInput: UpdateLabtestInput
  ) {
    return this.labtestService.update(
      updateLabtestInput.id,
      updateLabtestInput
    );
  }

  @Mutation(() => Labtest)
  removeLabtest(
    @Args('removeLabtestInput', { type: () => String })
    removeLabtestInput: Prisma.LabTestWhereUniqueInput
  ) {
    return this.labtestService.remove(removeLabtestInput);
  }
}
