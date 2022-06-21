import { Router } from "express";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateDeliverymanController } from "../modules/account/controllers/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../modules/deliveryman/controllers/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "../modules/deliveryman/controllers/FindAllDeliveriesDeliverymanController";

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

const deliverymanRoutes = Router();

deliverymanRoutes.post('/deliveryman/', createDeliverymanController.handle)
deliverymanRoutes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle)
deliverymanRoutes.get('/deliveryman/deliveries/', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

export { deliverymanRoutes };

