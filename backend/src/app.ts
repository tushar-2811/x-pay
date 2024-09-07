import express, {Express} from 'express'
import IndexRouter from './routes';

const app: Express = express();

// middlewares


app.use('/' , IndexRouter);

export default app;