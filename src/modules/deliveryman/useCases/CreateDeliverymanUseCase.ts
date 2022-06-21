import { DatabaseDeliverymanRepository } from "../interfaces"

interface CreateDeliverymanProps {
    username: string,
    password: string
}

export class CreateDeliverymanUseCase {
    constructor(private databaseRepository: DatabaseDeliverymanRepository) { }
    async execute({ username, password }: CreateDeliverymanProps) {

        const deliveryman = this.databaseRepository.create({ username, password })

        return deliveryman
    }
}