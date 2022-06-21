import { Request, Response } from "express";
import { PrismaDeliverymanRepository } from "../../prisma/prisma-deliveryman.repository";
import { CreateDeliverymanUseCase } from "../useCases/CreateDeliverymanUseCase";

export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {

        const databaseDeliverymanRepository = new PrismaDeliverymanRepository()

        const { username, password } = request.body;

        const createDeliverymanUseCase = new CreateDeliverymanUseCase(databaseDeliverymanRepository);

        const result = await createDeliverymanUseCase.execute({ username, password });

        if (result instanceof Error) {
            return response.status(400).send({
                status: 400,
                error: result.message
            })
        }

        return response.status(201).send({ status: 201, data: result })
    }


}