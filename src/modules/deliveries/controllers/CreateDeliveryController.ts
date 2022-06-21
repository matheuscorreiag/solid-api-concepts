import { Request, Response } from "express";
import { PrismaDeliveriesRepository } from "../../prisma/prisma-deliveries.repository";
import { CreateDeliveryUseCase } from "../useCases/CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(request: Request, response: Response) {

        const databaseDeliveryRepository = new PrismaDeliveriesRepository

        const { item_name } = request.body;
        const { id_client } = request;

        const createDeliveryUseCase = new CreateDeliveryUseCase(databaseDeliveryRepository)

        const delivery = await createDeliveryUseCase.execute({
            id_client,
            item_name
        })

        return response.status(201).send(delivery)

    }
}