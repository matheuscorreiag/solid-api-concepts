import { Deliveryman } from "@prisma/client"

export interface CreateDeliverymanProps {
    username: string,
    password: string
}

interface IDeliveryman extends Deliveryman { }

export interface DatabaseDeliverymanRepository {
    create: (data: CreateDeliverymanProps) => Promise<IDeliveryman>
    findAllDeliveries: (id_deliveryman: string) => Promise<any>
}