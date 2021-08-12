/*
  Warnings:

  - You are about to drop the column `contactName` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Facility` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Facility" DROP COLUMN "contactName",
DROP COLUMN "email",
DROP COLUMN "phone",
ADD COLUMN     "primaryContactName" TEXT,
ADD COLUMN     "primaryEmail" TEXT,
ADD COLUMN     "primaryPhone" TEXT;

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "pronouns" TEXT,
    "primaryPhone" TEXT,
    "secondaryPhone" TEXT,
    "emailAddress" TEXT,
    "notes" TEXT,
    "facilityId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contact" ADD FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
