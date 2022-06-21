

import { DatabaseClientsRepository } from '../interfaces';

interface CreateClient {
    username: string,
    password: string
}

export class CreateClientUseCase {

    constructor(private databaseRepository: DatabaseClientsRepository) { }

    async execute({ username, password }: CreateClient) {

        const client = await this.databaseRepository.createClient({ username, password })


        return client

    }
}