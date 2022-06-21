import { PrismaClientsRepository } from "../prisma/prisma-clients.repository";
import { CreateClientController } from "./controllers/CreateClient.controller";
import { FindAllDeliveriesController } from "./controllers/FindAllDeliveries.controller";
import { CreateClientUseCase } from "./useCases/CreateClient.useCase";
import { FindAllDeliveriesUseCase } from "./useCases/FindAllDeliveries.useCase";

const databaseRepository = new PrismaClientsRepository()

const createClientUseCase = new CreateClientUseCase(databaseRepository)

const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase(databaseRepository);

const createClientController = new CreateClientController(createClientUseCase)
const findAllDeliveriesController = new FindAllDeliveriesController(findAllDeliveriesUseCase);

export { createClientController, createClientUseCase, findAllDeliveriesUseCase, findAllDeliveriesController };
