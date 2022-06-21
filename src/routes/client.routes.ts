import { Request, Response, Router } from "express";
import { ensureAuthenticateClient } from "../middlewares/ensureAuthenticateClient";
import { authenticateClientController } from "../modules/account";
import { createClientController, findAllDeliveriesController } from '../modules/clients/index';

const clientRoute = Router();


clientRoute.post('/client/',
    (request: Request, response: Response) =>
        createClientController.handle(request, response));
clientRoute.post('/client/authenticate/',
    (request: Request, response: Response) =>
        authenticateClientController.handle(request, response));
clientRoute.get(
    '/client/deliveries/',
    ensureAuthenticateClient,
    (request: Request, response: Response) => findAllDeliveriesController.handle(request, response))


export { clientRoute };
