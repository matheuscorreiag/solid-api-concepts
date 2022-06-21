-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_client_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "end_at" DROP NOT NULL,
ALTER COLUMN "id_client" DROP NOT NULL,
ALTER COLUMN "id_deliveryman" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
