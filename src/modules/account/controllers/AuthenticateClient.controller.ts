import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "../useCases/AuthenticateClient.useCase";

export class AuthenticateClientController {

    constructor(private authenticateClientUseCase: AuthenticateClientUseCase) { }
    async handle(request: Request, response: Response) {

        const { username, password } = request.body;


        const result = await this.authenticateClientUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}