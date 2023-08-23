-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "contas_receber" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_lancamento" DATETIME NOT NULL,
    "data_vencimento" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "contas_receber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
