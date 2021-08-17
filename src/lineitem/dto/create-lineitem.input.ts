import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLineitemInput {
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
  strain: string;
  itemType: string;
  quantity: number;
  ppu: number;
  stockId?: string;
  orderId?: string;
  packedStatus: boolean;
  // TODO: Add stock and order models
}
