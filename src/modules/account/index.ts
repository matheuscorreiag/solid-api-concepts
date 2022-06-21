import { AuthenticateClientController } from "./controllers/AuthenticateClient.controller";
import { AuthenticateClientUseCase } from "./useCases/AuthenticateClient.useCase";

const authenticateClientUseCase = new AuthenticateClientUseCase();
const authenticateClientController = new AuthenticateClientController(authenticateClientUseCase)

export { authenticateClientController, authenticateClientUseCase };
