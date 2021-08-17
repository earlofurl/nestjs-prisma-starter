import { PrismaService } from '../prisma/prisma.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FacilityService } from './facility.service';
import { Facility } from './entities/facility.entity';
import { CreateFacilityInput } from './dto/create-facility.input';
import { UpdateFacilityInput } from './dto/update-facility.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Facility)
@UseGuards(GqlAuthGuard)
export class FacilityResolver {
  constructor(
    private facilityService: FacilityService,
    private prisma: PrismaService
  ) {}

  @Mutation(() => Facility)
  createFacility(
    @Args('createFacilityInput') createFacilityInput: CreateFacilityInput
  ) {
    return this.facilityService.create(createFacilityInput);
  }

  @Query(() => [Facility], { name: 'facilities' })
  findAll() {
    return this.facilityService.findAll();
  }

  @Query(() => Facility, { name: 'facility' })
  findOne(
    @Args('findOneFacilityInput', { type: () => String })
    findOneFacilityInput: Prisma.FacilityWhereUniqueInput
  ) {
    return this.facilityService.findOne(findOneFacilityInput);
  }

  @Mutation(() => Facility)
  updateFacility(
    @Args('updateFacilityInput') updateFacilityInput: UpdateFacilityInput
  ) {
    return this.facilityService.update(
      updateFacilityInput.id,
      updateFacilityInput
    );
  }

  @Mutation(() => Facility)
  removeFacility(
    @Args('removeOneFacilityInput', { type: () => String })
    removeOneFacilityInput: Prisma.FacilityWhereUniqueInput
  ) {
    return this.facilityService.remove(removeOneFacilityInput);
  }

  @ResolveField('orders')
  orders(@Parent() facility: Facility) {
    return this.prisma.facility
      .findUnique({ where: { id: facility.id } })
      .orders();
  }

  @ResolveField('contacts')
  contacts(@Parent() facility: Facility) {
    return this.prisma.facility
      .findUnique({ where: { id: facility.id } })
      .contacts();
  }
}
