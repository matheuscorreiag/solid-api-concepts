import { DatabaseDeliveriesRepository } from "../interfaces";


interface UpdateDeliverymanProps {
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {

    constructor(private databaseRepository: DatabaseDeliveriesRepository) { }

    async execute({ id_delivery, id_deliveryman }: UpdateDeliverymanProps) {

        const result = this.databaseRepository.updateDeliveryman({ id_delivery, id_deliveryman })

        return result;
    }
}