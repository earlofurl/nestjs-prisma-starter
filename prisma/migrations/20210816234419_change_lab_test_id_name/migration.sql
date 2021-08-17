/*
  Warnings:

  - The primary key for the `LabTest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `labTestResultId` on the `LabTest` table. All the data in the column will be lost.
  - The required column `id` was added to the `LabTest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_labTestId_fkey";

-- AlterTable
ALTER TABLE "LabTest" DROP CONSTRAINT "LabTest_pkey",
DROP COLUMN "labTestResultId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Stock" ADD FOREIGN KEY ("labTestId") REFERENCES "LabTest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
