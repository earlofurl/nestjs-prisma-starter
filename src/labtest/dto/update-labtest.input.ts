import { CreateLabtestInput } from './create-labtest.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabtestInput extends PartialType(CreateLabtestInput) {}
