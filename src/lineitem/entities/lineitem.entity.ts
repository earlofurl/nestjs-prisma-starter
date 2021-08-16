import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';

@ObjectType()
export class Lineitem extends BaseModel {
  strain: string;
  itemType: string;
  quantity: number;
  ppu: number;
  stockId?: string;
  orderId?: string;
  packedStatus: boolean;
  // TODO: Add stock and order models
}
