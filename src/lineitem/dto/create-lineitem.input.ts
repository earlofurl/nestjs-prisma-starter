import { InputType, Field, ID, Float } from '@nestjs/graphql';

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
  @Field((type) => Float)
  quantity: number;
  @Field((type) => Float)
  ppu: number;
  stockId?: string;
  orderId?: string;
  packedStatus: boolean;
  // TODO: Add stock and order models
}
