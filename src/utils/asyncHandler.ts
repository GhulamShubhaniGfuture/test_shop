import { NextFunction, Request, Response } from "express";


type asyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const asyncMiddleware = (fn: asyncFunction) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};