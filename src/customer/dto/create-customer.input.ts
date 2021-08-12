import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field((type) => ID)
  id: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
  name: string;
  photoPrimary?: string;
  notes?: string;
//  TODO: Add facility
}
