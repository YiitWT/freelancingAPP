import express, { Application } from 'express';


export const configureRouting = (app: Application) => {
    const router = express.Router();
    app.use('/api', router);
    router.post("/createGig", require('../../routes/gigRoutes/createGig').createGig);
    router.get("/searchGig", require('../../routes/gigRoutes/searchGig').searchGig);
};