import {Router} from 'express'
import {signInController, signUpController, updateUserController} from '../../../controllers/user.controller'

const userRouter = Router();

userRouter.route('/sign-in').post(signInController);
userRouter.route('/sign-up').post(signUpController);
userRouter.route('/update-user').post(updateUserController);

export default userRouter;