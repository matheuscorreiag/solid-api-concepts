import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "../useCases/AutheticateDeliveryman.useCase";

export class AuthenticateDeliverymanController {

    constructor(private authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase) { }
    async handle(request: Request, response: Response) {

        const { username, password } = request.body;


        const result = await this.authenticateDeliverymanUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}