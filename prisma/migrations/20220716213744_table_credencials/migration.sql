-- CreateTable
CREATE TABLE "credencials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "credencials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credencials_title_userId_key" ON "credencials"("title", "userId");

-- AddForeignKey
ALTER TABLE "credencials" ADD CONSTRAINT "credencials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
