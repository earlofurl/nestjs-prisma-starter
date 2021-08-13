import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';

@ObjectType()
export class Labtest extends BaseModel {
  labFacilityLicenseNumber?: string;
  labFacilityName?: string;
  sourcePackageLabel?: string;
  productName?: string;
  productCategoryName?: string;
  testPerformedDate?: Date;
  testPassed?: boolean;
  testComment?: string;
  thcPercent?: number;
  cbdPercent?: string;
  terpenePercent?: number;
  testBatch?: string;
  harvestDate?: Date;
  labTestExternalId?: string;
  producerLicenseName?: string;
  producerLicenseNumber?: string;
  harvestLocation?: string;
  // TODO: Add stock field when stock resource is added.
  // stock: Stock[];
  current: boolean;
}
