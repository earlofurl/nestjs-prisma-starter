import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { Prisma } from '@prisma/client';

@Resolver(() => Contact)
@UseGuards(GqlAuthGuard)
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation(() => Contact)
  createContact(
    @Args('createContactInput') createContactInput: CreateContactInput
  ) {
    return this.contactService.create(createContactInput);
  }

  @Query(() => [Contact], { name: 'contacts' })
  findAll() {
    return this.contactService.findAll();
  }

  @Query(() => Contact, { name: 'contact' })
  findOne(
    @Args('findOneContactInput', { type: () => String })
    findOneContactInput: Prisma.ContactWhereUniqueInput
  ) {
    return this.contactService.findOne(findOneContactInput);
  }

  @Mutation(() => Contact)
  updateContact(
    @Args('updateContactInput') updateContactInput: UpdateContactInput
  ) {
    return this.contactService.update(
      updateContactInput.id,
      updateContactInput
    );
  }

  @Mutation(() => Contact)
  removeContact(
    @Args('removeOneContactInput', { type: () => String })
    removeOneContactInput: Prisma.ContactWhereUniqueInput
  ) {
    return this.contactService.remove(removeOneContactInput);
  }
}
