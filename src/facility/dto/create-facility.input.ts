import { InputType, Field, ID } from '@nestjs/graphql';
import { Order } from '../../order/entities/order.entity';
import { Contact } from '../../contact/entities/contact.entity';

@InputType()
export class CreateFacilityInput {
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
  license?: string;
  primaryContactName?: string;
  primaryPhone?: string;
  primaryEmail?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  county?: string;
  notes?: string;
  customerId: string;
}
