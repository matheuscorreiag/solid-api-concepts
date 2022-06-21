import { Request, Response } from "express";
import { PrismaDeliverymanRepository } from "../../prisma/prisma-deliveryman.repository";
import { FindAllDeliveriesDeliverymanUseCase } from "../useCases/FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response) {

        const databaseDeliverymanRepository = new PrismaDeliverymanRepository();

        const { id_deliveryman } = request;
        const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase(databaseDeliverymanRepository);
        const deliveries = await findAllDeliveriesUseCase.execute(id_deliveryman);


        return response.status(200).send({
            status: 200,
            data: deliveries,
        })
    }
}