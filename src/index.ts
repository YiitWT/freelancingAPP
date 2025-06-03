import express from 'express';
import { configureRouting } from './core/routing';
import { config } from './core/config/config';
import connectDB from './core/config/db';

connectDB();

const app = express();

app.use(express.json());
configureRouting(app);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});

