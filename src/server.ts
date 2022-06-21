import express from 'express';
import "express-async-errors";
import { errorsMiddleware } from './middlewares/errorsMiddleware';
import { clientRoute } from './routes/client.routes';
import { deliveryRoutes } from './routes/delivery.routes';
import { deliverymanRoutes } from './routes/deliveryman.routes';


const app = express()
app.use(express.json());

app.use(clientRoute)
app.use(deliveryRoutes)
app.use(deliverymanRoutes)


app.use(errorsMiddleware)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})