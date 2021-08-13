import { CreateContactInput } from './create-contact.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(CreateContactInput) {}
