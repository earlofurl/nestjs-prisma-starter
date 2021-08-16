import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Lineitem } from '../../lineitem/entities/lineitem.entity';

@ObjectType()
export class Stock extends BaseModel {
  strain: string;
  itemType: string;
  quantity?: number;
  uom?: string;
  priceDefault?: number;
  labTestId?: string;
  @Field((type) => [Lineitem], { nullable: 'itemsAndList' })
  lineItems?: [Lineitem];
}
