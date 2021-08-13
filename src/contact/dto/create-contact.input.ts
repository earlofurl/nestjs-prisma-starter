import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateContactInput {
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
  firstName: string;
  lastName: string;
  pronouns?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  emailAddress?: string;
  notes?: string;
  facilityId: string;
}
