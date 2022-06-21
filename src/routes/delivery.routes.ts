import { Request, Response, Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { createDeliveryController, findAllAvailableController, updateDeliverymanController, updateEndDateController } from "../modules/deliveries";



const deliveryRoutes = Router();

deliveryRoutes.post('/delivery',
    ensureAuthenticateClient,
    (request: Request, response: Response) =>
        createDeliveryController.handle(request, response))
deliveryRoutes.get('/delivery/available',
    ensureAuthenticateDeliveryman,
    (request: Request, response: Response) =>
        findAllAvailableController.handle(request, response))
deliveryRoutes.put('/delivery/updateDeliveryman/:id',
    ensureAuthenticateDeliveryman,
    (request: Request, response: Response) =>
        updateDeliverymanController.handle(request, response))
deliveryRoutes.put('/delivery/updateEndDate/:id',
    ensureAuthenticateDeliveryman,
    (request: Request, response: Response) =>
        updateEndDateController.handle(request, response))

export { deliveryRoutes };
