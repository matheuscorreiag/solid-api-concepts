import { Request, Response } from "express";
import { PrismaClientsRepository } from "../../prisma/prisma-clients.repository";
import { CreateClientDto } from "../dtos/CreateClient.dto";
import { CreateClientUseCase } from "../useCases/CreateClient.useCase";

export class CreateClientController {
    async handle(request: Request, response: Response) {

        const databaseClientsRepository = new PrismaClientsRepository()

        const createClientUseCase = new CreateClientUseCase(databaseClientsRepository);
        const { username, password } = CreateClientDto.parse(request.body)


        const result = await createClientUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}