import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "../useCases/FindAllDeliveries.useCase";


export class FindAllDeliveriesController {

    constructor(private findAllDeliveriesUseCase: FindAllDeliveriesUseCase) { }
    async handle(request: Request, response: Response) {
        const { id_client } = request;

        const deliveries = await this.findAllDeliveriesUseCase.execute(id_client);

        return response.status(200).send({
            status: 200,
            data: deliveries,
        })
    }
}