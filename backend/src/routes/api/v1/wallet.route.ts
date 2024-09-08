import {Router} from 'express'
import { authMiddleware } from '../../../middlewares/auth.middleware'
import {getBalanceController, sendMoneyController} from '../../../controllers/wallet.controller'

const walletRouter = Router();

walletRouter.route('/get-balance').get(authMiddleware,getBalanceController)

walletRouter.route('/transfer').post(authMiddleware,sendMoneyController);

export default walletRouter;