import prisma from "../../database/prismaClient";
import { CreateDeliveryProps, DatabaseDeliveriesRepository, UpdateDeliveryProps } from "../deliveries/interfaces";


export class PrismaDeliveriesRepository implements DatabaseDeliveriesRepository {
    async create({ id_client, item_name }: CreateDeliveryProps) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })

        return delivery;
    }
    async findAllAvailable() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            }
        })

        return deliveries;

    }

    async updateDeliveryman({ id_delivery, id_deliveryman }: UpdateDeliveryProps) {
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })

        return result;
    }

    async updateEndDate({ id_delivery, id_deliveryman }: UpdateDeliveryProps) {
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman
            },
            data: {
                end_at: new Date(),
            }
        })

        return 'Success'

    }
}