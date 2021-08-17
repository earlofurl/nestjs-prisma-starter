import { Field, Float, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Lineitem } from '../../lineitem/entities/lineitem.entity';

@ObjectType()
export class Stock extends BaseModel {
  strain: string;
  itemType: string;
  @Field(type => Float)
  quantity?: number;
  uom?: string;
  @Field(type => Float)
  priceDefault?: number;
  labTestId?: string;
  @Field((type) => [Lineitem], { nullable: 'itemsAndList' })
  lineItems?: [Lineitem];
}
