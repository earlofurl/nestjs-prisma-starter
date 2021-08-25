import { ObjectType, registerEnumType, Field } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Lineitem } from '../../lineitem/entities/lineitem.entity';

export enum Status {
  OPEN = 'OPEN',
  PACKED = 'PACKED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CLOSED = 'CLOSED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Order status',
});

@ObjectType()
export class Order extends BaseModel {
  scheduledPackDate?: Date;
  scheduledShipDate?: Date;
  dateDelivered?: Date;
  status: Status;
  notes?: string;
  facilityId: string;
  customerId: string;
  @Field((type) => [Lineitem], { nullable: 'itemsAndList'})
  lineItems?: [Lineitem];
}
