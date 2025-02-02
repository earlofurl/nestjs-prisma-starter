import { InputType, Field, ID } from '@nestjs/graphql';
import { Facility } from '../../facility/entities/facility.entity';

@InputType()
export class CreateCustomerInput {
  @Field((type) => ID)
  id?: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt?: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt?: Date;
  name: string;
  photoPrimary?: string;
  notes?: string;
  // @Field(() => Facility)
  // facility: Facility;
}
