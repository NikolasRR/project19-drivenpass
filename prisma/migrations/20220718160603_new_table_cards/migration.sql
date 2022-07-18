-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('credit', 'debit', 'both');

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "nameOnCard" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" "CardType" NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_title_userId_key" ON "cards"("title", "userId");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
