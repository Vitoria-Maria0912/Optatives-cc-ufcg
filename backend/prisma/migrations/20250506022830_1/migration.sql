-- CreateEnum
CREATE TYPE "Type" AS ENUM ('OBRIGATORY', 'OPTATIVE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMINISTRATOR', 'COMMON');

-- CreateTable
CREATE TABLE "Discipline" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'OBRIGATORY',
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "professor" TEXT NOT NULL DEFAULT 'Not specified',
    "available" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL,
    "pre_requisites" TEXT[],
    "post_requisites" TEXT[],
    "schedule" TEXT NOT NULL DEFAULT 'Not specified',

    CONSTRAINT "Discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "planningId" INTEGER,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planning" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Planning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'COMMON',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "loginId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PeriodDisciplines" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PeriodDisciplines_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Discipline_name_key" ON "Discipline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");

-- CreateIndex
CREATE INDEX "_PeriodDisciplines_B_index" ON "_PeriodDisciplines"("B");

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "Planning"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Planning" ADD CONSTRAINT "Planning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeriodDisciplines" ADD CONSTRAINT "_PeriodDisciplines_A_fkey" FOREIGN KEY ("A") REFERENCES "Discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PeriodDisciplines" ADD CONSTRAINT "_PeriodDisciplines_B_fkey" FOREIGN KEY ("B") REFERENCES "Period"("id") ON DELETE CASCADE ON UPDATE CASCADE;
