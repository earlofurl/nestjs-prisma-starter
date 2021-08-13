import { CreateFacilityInput } from './create-facility.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFacilityInput extends PartialType(CreateFacilityInput) {}
