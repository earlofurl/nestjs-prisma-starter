import { ObjectType, Field, Float } from '@nestjs/graphql';
import { BaseModel } from '../../models/base.model';
import { Stock } from '../../stock/entities/stock.entity';

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
  @Field(type => Float)
  thcPercent?: number;
  cbdPercent?: string;
  @Field(type => Float)
  terpenePercent?: number;
  testBatch?: string;
  harvestDate?: Date;
  labTestExternalId?: string;
  producerLicenseName?: string;
  producerLicenseNumber?: string;
  harvestLocation?: string;
  @Field((type) => [Stock], { nullable: 'itemsAndList' })
  stock?: [Stock];
  current: boolean;
}
