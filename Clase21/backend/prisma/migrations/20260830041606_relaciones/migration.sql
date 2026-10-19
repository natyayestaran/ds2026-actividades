/*
  Warnings:

  - You are about to drop the column `nacionalidad` on the `Autor` table. All the data in the column will be lost.
  - You are about to drop the column `autor` on the `Libro` table. All the data in the column will be lost.
  - You are about to drop the column `imagen` on the `Libro` table. All the data in the column will be lost.
  - Added the required column `autorId` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Autor" DROP COLUMN "nacionalidad";

-- AlterTable
ALTER TABLE "Libro" DROP COLUMN "autor",
DROP COLUMN "imagen",
ADD COLUMN     "autorId" INTEGER NOT NULL,
ALTER COLUMN "precio" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LibroToCategoria" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_LibroToCategoria_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE INDEX "_LibroToCategoria_B_index" ON "_LibroToCategoria"("B");

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LibroToCategoria" ADD CONSTRAINT "_LibroToCategoria_A_fkey" FOREIGN KEY ("A") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LibroToCategoria" ADD CONSTRAINT "_LibroToCategoria_B_fkey" FOREIGN KEY ("B") REFERENCES "Libro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
