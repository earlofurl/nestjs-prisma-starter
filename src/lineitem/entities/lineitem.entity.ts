import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';

@ObjectType()
export class Lineitem extends BaseModel {
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
