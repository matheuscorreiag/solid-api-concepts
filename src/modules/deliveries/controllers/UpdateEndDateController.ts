import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "../useCases/UpdateEndDateUseCase";



export class UpdateEndDateController {

    constructor(
        private updateEndDateUseCase: UpdateEndDateUseCase
    ) { }
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;


        const delivery = await this.updateEndDateUseCase.execute({
            id_deliveryman,
            id_delivery
        })

        return response.status(200).send({
            status: 200,
            data: delivery
        })
    }
}