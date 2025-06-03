import { Request, Response, NextFunction } from 'express';
import GigModel, { IGig } from '../../models/GigModel';

export const searchGig = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = req.query.query as string;

        if (!query) {
            return res.status(400).json({
                status: 'fail',
                message: 'Atleast one parameter is required',
            });
        }

        const gigs = await GigModel.find({ title: { $regex: query, $options: 'i' } });

        if (!gigs || gigs.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No gigs found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                gigs,
            },
        });
    } catch (error) {
        next(error);
    }
}