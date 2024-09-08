import {Router} from 'express'
import userRouter from './user.route'
import wallerRouter from './wallet.route'

const v1Router:Router = Router();

v1Router.use('/user' , userRouter);
v1Router.use('/wallet' , wallerRouter);

export default v1Router;