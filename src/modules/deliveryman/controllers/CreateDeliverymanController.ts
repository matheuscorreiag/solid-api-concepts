import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "../useCases/CreateDeliverymanUseCase";

export class CreateDeliverymanController {
    constructor(private createDeliverymanUseCase: CreateDeliverymanUseCase) { }
    async handle(request: Request, response: Response) {

        const { username, password } = request.body;

        const result = await this.createDeliverymanUseCase.execute({ username, password });

        return response.status(201).send({ status: 201, data: result })
    }


}