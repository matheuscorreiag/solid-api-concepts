import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "../useCases/FindAllAvailableUseCase";

export class FindAllAvailableController {

    constructor(private findAllAvailableUseCase: FindAllAvailableUseCase) { }

    async handle(request: Request, response: Response) {

        const deliveries = await this.findAllAvailableUseCase.execute();

        return response.status(200).send({
            status: 200,
            data: deliveries
        })

    }
}