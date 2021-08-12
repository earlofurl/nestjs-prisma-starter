import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';

@ObjectType()
export class Customer extends BaseModel {
  name: string;
  photoPrimary?: string;
  notes?: string;
  // TODO: add import when adding Facility later. Scaffold customer resource first.
  // facilities?: Facility;
}
