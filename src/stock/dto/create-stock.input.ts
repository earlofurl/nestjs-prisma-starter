import { InputType, Field, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateStockInput {
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
  @Field(type => Float)
  quantity?: number;
  uom?: string;
  @Field(type => Float)
  priceDefault?: number;
  labTestId?: string;
  // TODO: Add lineItems to object when lineItem resource created.
}
