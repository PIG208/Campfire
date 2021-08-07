import { Request, Response } from 'express';

const utils = {
    extractBody<T extends (requestBody: any) => any>(
        req: Request,
        service: T
    ): Parameters<T>[0] {
        return req.body as any;
    },
    success(res: Response, data?: any) {
        res.json({
            result: 'success',
            ...data,
        });
    },
    error(res: Response, reason: string, status: number = 400) {
        res.status(status).json({
            result: 'error',
            reason: reason,
        });
    },
    undefinedIfNaN(n?: number) {
        return isNaN(n) ? undefined : n;
    },
};

export default utils;
