import { DatabaseClientsRepository } from "../interfaces";


export class FindAllDeliveriesUseCase {
    constructor(private databaseRepository: DatabaseClientsRepository) { }
    async execute(id_client: string) {

        const deliveries = this.databaseRepository.findAllClientDeliveries(id_client)

        return deliveries
    }
}