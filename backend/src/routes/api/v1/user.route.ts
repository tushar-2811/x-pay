import {Router} from 'express'
import {signInController, signUpController, updateUserController} from '../../../controllers/user.controller'
import {authMiddleware} from '../../../middlewares/auth.middleware'

const userRouter = Router();

userRouter.route('/sign-in').post(signInController);
userRouter.route('/sign-up').post(signUpController);
userRouter.route('/update-user').post(authMiddleware,updateUserController);

export default userRouter;