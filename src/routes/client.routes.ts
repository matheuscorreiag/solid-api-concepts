import { Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "../modules/account/controllers/AuthenticateClientController";
import { CreateClientController } from "../modules/clients/controllers/CreateClient.controller";
import { FindAllDeliveriesController } from "../modules/clients/controllers/FindAllDeliveries.controller";

const clientRoute = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientRoute.post('/client/', createClientController.handle);
clientRoute.post('/client/authenticate/', authenticateClientController.handle);
clientRoute.get('/client/deliveries/', ensureAuthenticateClient, findAllDeliveriesController.handle)


export { clientRoute };
