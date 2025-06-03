import { Request, Response, NextFunction } from 'express';
import GigModel, { IGig } from '../../models/GigModel';

export const searchGig = async (req: Request, res: Response, next: NextFunction) => {
    try {
        var gigs = null; // await GigModel.find({ title: { $regex: query, $options: 'i' } });

        const userID = req.query.userID as string;
        const gigID = req.query.gigID as string;

        if (userID) {
            gigs = await GigModel.find({ userID });
        } else if (gigID) {
            gigs = await GigModel.find({ _id: gigID });
        }
        else {
            return res.status(400).json({
                status: 'fail',
                message: 'At least one parameter is required',
            });
        }

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