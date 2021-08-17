import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Order } from '../../order/entities/order.entity';
import { Contact } from '../../contact/entities/contact.entity';

@ObjectType()
export class Facility extends BaseModel {
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
  @Field(() => [Order], { nullable: 'itemsAndList' })
  orders?: [Order];
  @Field(() => [Contact], { nullable: 'itemsAndList' })
  contacts?: [Contact];
}
