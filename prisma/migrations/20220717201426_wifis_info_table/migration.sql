-- CreateTable
CREATE TABLE "wifisInfos" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "wifi" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "wifisInfos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wifisInfos" ADD CONSTRAINT "wifisInfos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
