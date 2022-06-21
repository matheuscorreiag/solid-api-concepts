import { Request, Response } from "express";
import { PrismaDeliveriesRepository } from "../../prisma/prisma-deliveries.repository";
import { UpdateEndDateUseCase } from "../useCases/UpdateEndDateUseCase";



export class UpdateEndDateController {

    async handle(request: Request, response: Response) {

        const databaseDeliveryRepository = new PrismaDeliveriesRepository()

        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;

        const updateEndDateUseCase = new UpdateEndDateUseCase(databaseDeliveryRepository);

        const delivery = await updateEndDateUseCase.execute({
            id_deliveryman,
            id_delivery
        })

        return response.status(200).send({
            status: 200,
            data: delivery
        })
    }
}