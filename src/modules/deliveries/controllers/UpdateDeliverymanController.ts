import { Request, Response } from "express";
import { PrismaDeliveriesRepository } from "../../prisma/prisma-deliveries.repository";
import { UpdateDeliverymanUseCase } from "../useCases/UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {

    async handle(request: Request, response: Response) {

        const databaseDeliveryRepository = new PrismaDeliveriesRepository()

        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase(databaseDeliveryRepository);

        const delivery = await updateDeliverymanUseCase.execute({ id_delivery, id_deliveryman })

        return response.status(200).send({
            status: 200,
            data: delivery
        })

    }
}