import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "../useCases/AuthenticateClientUseCase";

export class AuthenticateClientController {

    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();

        const result = await authenticateClientUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}