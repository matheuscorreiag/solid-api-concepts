import { DatabaseDeliverymanRepository } from "../interfaces";


export class FindAllDeliveriesDeliverymanUseCase {
    constructor(private databaseRepository: DatabaseDeliverymanRepository) { }
    async execute(id_deliveryman: string) {

        const deliveries = this.databaseRepository.findAllDeliveries(id_deliveryman)

        return deliveries
    }
}