import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateDeliveryController } from "../modules/deliveries/controllers/CreateDeliveryController";
import { FindAllAvailableController } from "../modules/deliveries/controllers/FindAllAvailableController";
import { UpdateDeliverymanController } from "../modules/deliveries/controllers/UpdateDeliverymanController";
import { UpdateEndDateController } from "../modules/deliveries/controllers/UpdateEndDateController";

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDate = new UpdateEndDateController();

const deliveryRoutes = Router();

deliveryRoutes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)
deliveryRoutes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)
deliveryRoutes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
deliveryRoutes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDate.handle)

export { deliveryRoutes };
