import { json } from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
import mongoose from 'mongoose';

import { config } from './config';
import { productRouter } from './routes/product';

const app: Express = express();

mongoose.connect('mongodb+srv://admin:admin@batch139.kdoph.mongodb.net/Aveosoft', {
}, () => console.log('connected to database'))

app.use(cors());
app.use(json())
app.use(productRouter)

const PORT = process.env.PORT || 8080;

app.listen(config.server.port, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
