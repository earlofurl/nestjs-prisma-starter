import { InputType, Field, ID } from '@nestjs/graphql';
import { Status } from '../entities/order.entity';

@InputType()
export class CreateOrderInput {
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
  scheduledPackDate?: Date;
  scheduledShipDate?: Date;
  dateDelivered?: Date;
  status: Status;
  notes?: string;
  facilityId: string;
  // TODO: add lineItems
}
