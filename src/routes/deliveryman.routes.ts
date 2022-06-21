import { Request, Response, Router } from "express";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { authenticateDeliverymanController, createDeliverymanController, findAllDeliveriesDeliverymanController } from "../modules/deliveryman";


const deliverymanRoutes = Router();

deliverymanRoutes.post('/deliveryman/',
    (request: Request, response: Response) =>
        createDeliverymanController.handle(request, response))
deliverymanRoutes.post('/deliveryman/authenticate/',
    (request: Request, response: Response) =>
        authenticateDeliverymanController.handle(request, response))
deliverymanRoutes.get('/deliveryman/deliveries/',
    ensureAuthenticateDeliveryman,
    (request: Request, response: Response) =>
        findAllDeliveriesDeliverymanController.handle(request, response))

export { deliverymanRoutes };

