import { Request, Response } from "express";
import { CreateClientDto } from "../dtos/CreateClient.dto";
import { CreateClientUseCase } from "../useCases/CreateClient.useCase";

export class CreateClientController {

    constructor(private createClientUseCase: CreateClientUseCase) { }
    async handle(request: Request, response: Response) {

        const { username, password } = CreateClientDto.parse(request.body)

        const result = await this.createClientUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}