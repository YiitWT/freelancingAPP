import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validatorHandler = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return next(new Error(JSON.stringify(result.array())));
    }
    next();
}