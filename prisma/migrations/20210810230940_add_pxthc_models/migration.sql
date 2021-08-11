-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPEN', 'PACKED', 'SHIPPED', 'DELIVERED', 'CLOSED', 'COMPLETED');

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photoPrimary" TEXT,
    "notes" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "license" TEXT,
    "contactName" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "county" TEXT,
    "notes" TEXT,
    "customerId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabTest" (
    "labTestResultId" SERIAL NOT NULL,
    "labFacilityLicenseNumber" TEXT,
    "labFacilityName" TEXT,
    "sourcePackageLabel" TEXT,
    "productName" TEXT,
    "productCategoryName" TEXT,
    "testPerformedDate" TIMESTAMP(3),
    "testPassed" BOOLEAN DEFAULT false,
    "testComment" TEXT,
    "thcPercent" DOUBLE PRECISION,
    "cbdPercent" TEXT,
    "terpenePercent" DOUBLE PRECISION,
    "testBatch" TEXT,
    "harvestDate" TIMESTAMP(3),
    "labTestExternalId" TEXT,
    "producerLicenseName" TEXT,
    "producerLicenseNumber" TEXT,
    "harvestLocation" TEXT,
    "current" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("labTestResultId")
);

-- CreateTable
CREATE TABLE "LineItem" (
    "id" SERIAL NOT NULL,
    "strain" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "ppu" DOUBLE PRECISION NOT NULL,
    "stockId" INTEGER,
    "orderId" INTEGER,
    "packedStatus" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scheduledPackDate" TIMESTAMP(3),
    "scheduledShipDate" TIMESTAMP(3),
    "dateDelivered" TIMESTAMP(3),
    "status" "Status" NOT NULL,
    "notes" TEXT,
    "facilityId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "strain" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION,
    "uom" TEXT,
    "priceDefault" DOUBLE PRECISION,
    "labTestId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Facility" ADD FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineItem" ADD FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD FOREIGN KEY ("labTestId") REFERENCES "LabTest"("labTestResultId") ON DELETE CASCADE ON UPDATE CASCADE;
