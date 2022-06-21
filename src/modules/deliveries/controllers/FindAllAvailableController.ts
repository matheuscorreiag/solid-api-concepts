import { Request, Response } from "express";
import { PrismaDeliveriesRepository } from "../../prisma/prisma-deliveries.repository";
import { FindAllAvailableUseCase } from "../useCases/FindAllAvailableUseCase";

export class FindAllAvailableController {

    async handle(request: Request, response: Response) {

        const databaseDeliveryRepository = new PrismaDeliveriesRepository()

        const findAllAvailableUseCase = new FindAllAvailableUseCase(databaseDeliveryRepository)

        const deliveries = await findAllAvailableUseCase.execute();

        return response.status(200).send({
            status: 200,
            data: deliveries
        })

    }
}