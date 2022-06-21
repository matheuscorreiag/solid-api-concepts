import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "../useCases/UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
    constructor(private updateDeliverymanUseCase: UpdateDeliverymanUseCase) { }
    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;

        const delivery = await this.updateDeliverymanUseCase.execute({ id_delivery, id_deliveryman })

        return response.status(200).send({
            status: 200,
            data: delivery
        })

    }
}