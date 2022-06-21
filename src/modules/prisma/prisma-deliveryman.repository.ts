
import { hash } from "bcrypt";
import prisma from "../../database/prismaClient";
import { CreateDeliverymanProps, DatabaseDeliverymanRepository } from "../deliveryman/interfaces";


export class PrismaDeliverymanRepository implements DatabaseDeliverymanRepository {
    async create({ username, password }: CreateDeliverymanProps) {

        const deliverymanExist = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: 'insensitive'
                }
            }
        })

        if (deliverymanExist) {
            throw new Error('Deliveryman already exists')
        }

        const hashPassword = await hash(password, 10)

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return deliveryman
    }

    async findAllDeliveries(id_deliveryman: string) {

        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_deliveryman,
            }
        })
        return deliveries

    }

}
