-- CreateTable
CREATE TABLE "secureNotes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "secureNotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secureNotes_title_userId_key" ON "secureNotes"("title", "userId");

-- AddForeignKey
ALTER TABLE "secureNotes" ADD CONSTRAINT "secureNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
