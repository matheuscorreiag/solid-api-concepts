import prisma from "../../../database/prismaClient";
import { DatabaseDeliveriesRepository, UpdateDeliveryProps } from "../interfaces";

export class UpdateEndDateUseCase {
    constructor(private databaseRepository: DatabaseDeliveriesRepository){}

    async execute({ id_delivery, id_deliveryman }: UpdateDeliveryProps) {

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