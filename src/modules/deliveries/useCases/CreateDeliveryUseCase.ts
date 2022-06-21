import { DatabaseDeliveriesRepository } from "../interfaces";

interface CreateDeliveryProps {
    item_name: string;
    id_client: string;
}

export class CreateDeliveryUseCase {

    constructor(private databaseRepository: DatabaseDeliveriesRepository) { }

    async execute({ item_name, id_client }: CreateDeliveryProps) {

        const delivery = this.databaseRepository.create({ id_client, item_name })

        return delivery;
    }
}