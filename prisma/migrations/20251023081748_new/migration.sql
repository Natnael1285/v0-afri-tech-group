/*
  Warnings:

  - The values [ONGOING,PLANNED] on the enum `ProjectStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectStatus_new" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'PLANNING', 'UNDER_CONSTRUCTION');
ALTER TABLE "Project" ALTER COLUMN "ProjectStatus" TYPE "ProjectStatus_new" USING ("ProjectStatus"::text::"ProjectStatus_new");
ALTER TYPE "ProjectStatus" RENAME TO "ProjectStatus_old";
ALTER TYPE "ProjectStatus_new" RENAME TO "ProjectStatus";
DROP TYPE "public"."ProjectStatus_old";
COMMIT;
