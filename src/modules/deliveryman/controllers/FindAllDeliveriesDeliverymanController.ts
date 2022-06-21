import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "../useCases/FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
    constructor(private findAllDeliveriesDeliverymanUseCase: FindAllDeliveriesDeliverymanUseCase) { }
    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;
        const deliveries = await this.findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman);

        return response.status(200).send({
            status: 200,
            data: deliveries,
        })
    }
}