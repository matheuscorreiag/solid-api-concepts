import { Deliveries } from "@prisma/client";

export interface CreateClient {
    username: string,
    password: string
}

export interface Clients {
    id: string;
    username: string;
    password: string;
}

export interface DatabaseClientsRepository {
    createClient: (data: CreateClient) => Promise<Clients>
    findAllClientDeliveries: (id_client: string) => Promise<Deliveries[]>
}