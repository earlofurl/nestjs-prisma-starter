import { InputType, Field, ID, Float, Scalar } from '@nestjs/graphql';

@InputType()
export class CreateLabtestInput {
  @Field((type) => ID)
  id?: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt?: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt?: Date;
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
  // stock: Stock[];
  current: boolean;
}
