import { PrismaDeliveriesRepository } from "../prisma/prisma-deliveries.repository";
import { CreateDeliveryController } from "./controllers/CreateDeliveryController";
import { FindAllAvailableController } from "./controllers/FindAllAvailableController";
import { UpdateDeliverymanController } from "./controllers/UpdateDeliverymanController";
import { UpdateEndDateController } from "./controllers/UpdateEndDateController";
import { CreateDeliveryUseCase } from "./useCases/CreateDeliveryUseCase";
import { FindAllAvailableUseCase } from "./useCases/FindAllAvailableUseCase";
import { UpdateDeliverymanUseCase } from "./useCases/UpdateDeliverymanUseCase";
import { UpdateEndDateUseCase } from "./useCases/UpdateEndDateUseCase";


const databaseRepository = new PrismaDeliveriesRepository();


const createDeliveryUseCase = new CreateDeliveryUseCase(databaseRepository);
const createDeliveryController = new CreateDeliveryController(createDeliveryUseCase);

const updateDeliverymanUseCase = new UpdateDeliverymanUseCase(databaseRepository);
const updateDeliverymanController = new UpdateDeliverymanController();

const findAllAvailableUseCase = new FindAllAvailableUseCase(databaseRepository)
const findAllAvailableController = new FindAllAvailableController()

const updateEndDateUseCase = new UpdateEndDateUseCase(databaseRepository)
const updateEndDateController = new UpdateEndDateController(updateEndDateUseCase)

export { createDeliveryController, createDeliveryUseCase, updateDeliverymanController, updateDeliverymanUseCase, findAllAvailableController, findAllAvailableUseCase, updateEndDateController };

