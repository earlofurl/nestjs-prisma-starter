import { InputType, Field, ID } from '@nestjs/graphql';

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
