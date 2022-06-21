import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "../useCases/CreateDeliveryUseCase";


export class CreateDeliveryController {
    constructor(private createDeliveryUseCase: CreateDeliveryUseCase) { }
    async handle(request: Request, response: Response) {

        const { item_name } = request.body;
        const { id_client } = request;

        const delivery = await this.createDeliveryUseCase.execute({
            id_client,
            item_name
        })

        return response.status(201).send(delivery)

    }
}