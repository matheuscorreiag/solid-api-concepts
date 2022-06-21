import { AuthenticateDeliverymanController } from "../account/controllers/AuthenticateDeliveryman.controller";
import { AuthenticateDeliverymanUseCase } from "../account/useCases/AutheticateDeliveryman.useCase";
import { PrismaDeliverymanRepository } from "../prisma/prisma-deliveryman.repository";
import { CreateDeliverymanController } from "./controllers/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./controllers/FindAllDeliveriesDeliverymanController";
import { CreateDeliverymanUseCase } from "./useCases/CreateDeliverymanUseCase";
import { FindAllDeliveriesDeliverymanUseCase } from "./useCases/FindAllDeliveriesDeliverymanUseCase";


const databaseRepository = new PrismaDeliverymanRepository();

const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
const authenticateDeliverymanController = new AuthenticateDeliverymanController(authenticateDeliverymanUseCase);

const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase(databaseRepository);
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController(findAllDeliveriesDeliverymanUseCase);

const createDeliverymanUseCase = new CreateDeliverymanUseCase(databaseRepository);
const createDeliverymanController = new CreateDeliverymanController(createDeliverymanUseCase);

export { createDeliverymanController, createDeliverymanUseCase, findAllDeliveriesDeliverymanController, findAllDeliveriesDeliverymanUseCase, authenticateDeliverymanController };

