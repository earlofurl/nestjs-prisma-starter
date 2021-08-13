import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  firstName: string;
  lastName: string;
  pronouns?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  emailAddress?: string;
  notes?: string;
  facilityId: string;
}
