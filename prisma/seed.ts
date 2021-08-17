import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa1@simpson.com',
      firstname: 'Lisa',
      lastname: 'Simpson',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      role: 'USER',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2019 in Berlin',
          content: 'https://www.prisma.io/day/',
          published: true,
        },
      },
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart2@simpson.com',
      firstname: 'Bart',
      lastname: 'Simpson',
      role: 'ADMIN',
      password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false,
          },
        ],
      },
    },
  });

  const customer1 = await prisma.customer.create({
    data: {
      id: 'cksfhwuyp0028t8ugl8lv4dtr',
      name: 'OBB',
      notes: 'They love warm beans',
      photoPrimary: 'pending',
    },
  });

  const facility1 = await prisma.facility.create({
    data: {
      address1: '123 Meth Ave',
      address2: '',
      city: 'Gresham',
      county: 'Multnomah',
      customerId: 'cksfhwuyp0028t8ugl8lv4dtr',
      id: 'cksfhxems0051t8ugo1v6skf2',
      license: '050-WHATEVER',
      name: "Oregon's Best Buds",
      notes: 'The cool beans store',
      primaryContactName: 'Dylan Tyson',
      primaryEmail: 'obb@hotmail.com',
      primaryPhone: '123-456-7890',
      state: 'OR',
      zip: '97000',
    },
  });

  const contact1 = await prisma.contact.create({
    data: {
      emailAddress: 'warmbeans@hotmail.com',
      facilityId: 'cksfhxems0051t8ugo1v6skf2',
      firstName: 'Dylan',
      lastName: 'Tyson',
      notes: 'The ultimate bean warmer.',
      primaryPhone: '666-777-9987',
      pronouns: 'He/Him',
      secondaryPhone: '',
    },
  });

  const labTest1 = await prisma.labTest.create({
    data: {
      cbdPercent: '0.12',
      createdAt: '2021-08-17T03:39:06.993Z',
      current: true,
      harvestDate: '2021-08-01T03:39:06.994Z',
      harvestLocation: 'Field',
      id: 'cksfioay90013d4ugq9pt5n60',
      labFacilityLicenseNumber: '010-SOMETHING',
      labFacilityName: 'Juniper Analytics',
      labTestExternalId: '20JA1051.01',
      producerLicenseName: 'Moto Perpetuo Farm',
      producerLicenseNumber: '020-FARMTIME',
      productCategoryName: 'Buds',
      productName: 'Flower - Dutch Treat',
      sourcePackageLabel: '1A40006211',
      terpenePercent: 2.11,
      testBatch: '20-M-A',
      testComment: 'This is a test',
      testPassed: true,
      testPerformedDate: '2021-08-17T03:39:06.994Z',
      thcPercent: 22.25,
      updatedAt: '2021-08-17T03:39:06.994Z',
    },
  });

  const stock1 = await prisma.stock.create({
    data: {
      id: 'cksfiqo780004swugikz0tu1e',
      itemType: 'Buds',
      labTestId: 'cksfioay90013d4ugq9pt5n60',
      priceDefault: 700,
      quantity: 5,
      strain: 'Dutch Treat',
      uom: 'Pounds',
    },
  });

  const order1 = await prisma.order.create({
    data: {
      id: 'dksfhxexs0151t8ug01v6skf3',
      dateDelivered: '2021-08-17T03:39:06.994Z',
      facilityId: 'cksfhxems0051t8ugo1v6skf2',
      notes: 'First Test Order',
      scheduledPackDate: '2021-08-22T03:39:06.994Z',
      scheduledShipDate: '2021-08-23T03:39:06.994Z',
      status: 'OPEN',
    },
  });

  const lineItem1 = await prisma.lineItem.create({
    data: {
      orderId: 'dksfhxexs0151t8ug01v6skf3',
      packedStatus: true,
      ppu: 650,
      quantity: 1,
      stockId: 'cksfiqo780004swugikz0tu1e',
      strain: 'Dutch Treat',
      itemType: 'Buds',
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
