import { Deliveries } from "@prisma/client";


export interface CreateDeliveryProps {
    item_name: string;
    id_client: string;
}


export interface UpdateDeliveryProps {
    id_delivery: string,
    id_deliveryman: string,
}

interface Delivery extends Deliveries { }

export interface DatabaseDeliveriesRepository {
    create: (data: CreateDeliveryProps) => Promise<Delivery>
    findAllAvailable: () => Promise<Delivery[]>
    updateDeliveryman: (data: UpdateDeliveryProps) => Promise<Delivery>
    updateEndDate: (data: UpdateDeliveryProps) => Promise<string>
}