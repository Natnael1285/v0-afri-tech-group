/*
  Warnings:

  - Added the required column `Category` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProjectStatus` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "Category" "ProjectCategory" NOT NULL,
ADD COLUMN     "ProjectStatus" "ProjectStatus" NOT NULL;
