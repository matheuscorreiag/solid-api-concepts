import { DatabaseDeliveriesRepository } from "../interfaces";


export class FindAllAvailableUseCase {

    constructor(private databaseRepository: DatabaseDeliveriesRepository) { }

    async execute() {

        const deliveries = this.databaseRepository.findAllAvailable()

        return deliveries
    }
}