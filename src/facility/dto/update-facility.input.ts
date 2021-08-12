import { CreateFacilityInput } from './create-facility.input';
import { InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
// export class UpdateFacilityInput extends OmitType(CreateFacilityInput, [
//   'customer',
// ] as const) {}
export class UpdateFacilityInput extends PartialType(CreateFacilityInput) {}
