import path from 'path';
import express, { Request, Response } from 'express';
import { initialize } from 'express-openapi';
import { PrismaClient } from '@prisma/client';

const app = express();
export const client = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

initialize({
    app,
    apiDoc: './campfire.yml',
    paths: path.resolve(__dirname, 'paths'),
    consumesMiddleware: {
        'application/json': express.json(),
    },
});

app.use(((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong...');
}) as express.ErrorRequestHandler);

console.log('Start listening at 8080');
app.listen(8080);
