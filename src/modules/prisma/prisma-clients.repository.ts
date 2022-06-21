import { hash } from "bcrypt";
import prisma from "../../database/prismaClient";
import { CreateClient, DatabaseClientsRepository } from "../clients/interfaces";


export class PrismaClientsRepository implements DatabaseClientsRepository {
    async createClient({ username, password }: CreateClient) {

        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })

        if (clientExist) {
            throw new Error('Client already exists')
        }

        const hashPassword = await hash(password, 10)

        const clients = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return clients;
    }

    async findAllClientDeliveries(id_client: string) {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_client,
            }
        })

        return deliveries;
    }
}