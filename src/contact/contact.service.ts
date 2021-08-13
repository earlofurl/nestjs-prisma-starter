import { Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  create(createContactInput: CreateContactInput) {
    // 'This action adds a new contact'
    return this.prisma.contact.create({
      data: {
        ...createContactInput,
      },
    });
  }

  findAll() {
    // `This action returns all contact`
    return this.prisma.contact.findMany();
  }

  findOne(id: Prisma.ContactWhereUniqueInput) {
    // `This action returns a #${id} contact`
    return this.prisma.contact.findUnique({
      where: id,
    });
  }

  update(id: string, updateContactInput: UpdateContactInput) {
    // `This action updates a #${id} contact`
    return this.prisma.contact.update({
      data: updateContactInput,
      where: {
        id: id,
      },
    });
  }

  remove(id: Prisma.ContactWhereUniqueInput) {
    // `This action removes a #${id} contact`
    return this.prisma.contact.delete({
      where: id,
    });
  }
}
