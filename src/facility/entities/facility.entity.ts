import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';

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
  // TODO: Implement orders and contacts after resources are added.
  // orders
  // contacts
}
