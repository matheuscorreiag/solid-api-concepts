import { Request, Response } from "express";
import { PrismaClientsRepository } from "../../prisma/prisma-clients.repository";
import { FindAllDeliveriesUseCase } from "../useCases/FindAllDeliveries.useCase";


export class FindAllDeliveriesController {

    async handle(request: Request, response: Response) {

        const databaseClientsRepository = new PrismaClientsRepository()

        const { id_client } = request;
        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase(databaseClientsRepository);

        const deliveries = await findAllDeliveriesUseCase.execute(id_client);


        return response.status(200).send({
            status: 200,
            data: deliveries,
        })
    }
}