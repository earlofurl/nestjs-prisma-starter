import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Facility } from '../../facility/entities/facility.entity';

@ObjectType()
export class Customer extends BaseModel {
  name: string;
  photoPrimary?: string;
  notes?: string;
  @Field((type) => [Facility], { nullable: 'itemsAndList' })
  facilities?: Facility[];
}
