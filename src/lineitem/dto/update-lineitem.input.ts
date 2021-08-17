import { CreateLineitemInput } from './create-lineitem.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLineitemInput extends PartialType(CreateLineitemInput) {}
