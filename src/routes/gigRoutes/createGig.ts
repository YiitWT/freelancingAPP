import { Request, Response, NextFunction } from 'express';
import GigModel, { IGig } from '../../models/GigModel';
export const createGig = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, budget, tags } = req.body;

        const newGig = await GigModel.create({
            title,
            description,
            budget,
            tags,
        });

        res.status(201).json({
            status: 'success',
            data: {
                gig: newGig,
            },
        });
    } catch (error) {
        next(error);
    }
};