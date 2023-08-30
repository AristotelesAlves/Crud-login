-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contas_receber" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" INTEGER NOT NULL,
    "parcela" INTEGER NOT NULL,
    "data_lancamento" DATETIME NOT NULL,
    "user_id" TEXT,
    CONSTRAINT "Contas_receber_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
