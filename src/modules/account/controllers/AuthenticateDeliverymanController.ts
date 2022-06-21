import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "../useCases/AutheticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {

    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        const authenticateDeliveryManUseCase = new AuthenticateDeliverymanUseCase();

        const result = await authenticateDeliveryManUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}