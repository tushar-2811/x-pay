import {Request , Response} from 'express'
import WalletModel from '../models/wallet.model';
import mongoose from 'mongoose'


export const addBalanceController = async(req: Request , res: Response) => {

}


export const sendMoneyController = async(req: Request , res: Response) => {
    const session = await mongoose.startSession();
    session.startTransaction();
      try {
         const senderId = req.headers["user"];
         const {amount , recieverId} = req.body;

         if(!amount || !recieverId){
            return res.status(401).json({
                ok : false,
                message : "invalid credentials"
            })
         }

         const senderWallet = await WalletModel.findOne({owner : senderId}).session(session);

         if(!senderWallet || senderWallet.balance < amount){
            await session.abortTransaction();
            console.log("balance is low for transaction");
             return res.status(401).json({
                ok : false,
                message : "account balance is low"
             })
         }


         const recieverWallet = await WalletModel.findOne({owner : recieverId}).session(session);

         if(!recieverWallet){
            await session.abortTransaction();
            return res.status(401).json({
                ok : false,
                message : "Reciever does not exist"
             })
         }

         await WalletModel.findOneAndUpdate({owner : senderId} , {
            $inc : {
                balance : -amount
            }
         })

         await WalletModel.findByIdAndUpdate({owner : recieverId} , {
            $inc : {
                balance : amount
            }
         })

          await session.commitTransaction();
          return;

      } catch (error) {
        console.log("error while sending money" ,error);
        return res.status(501).json({
            ok : false,
            message : "error while sending money",
            error : error
        })
      }finally{
        await session.endSession();
      }
}

export const getBalanceController = async(req: Request , res: Response) => {
    try {
        const userId = req.headers["user"];

        const existingWallet = await WalletModel.findOne({
            owner : userId
        })

        if(!existingWallet){
            return res.status(403).json({
                ok : false,
                message : "NO Wallet found"
            })
        }

        return res.status(201).json({
            ok : true,
            message : "Wallet found",
            data : existingWallet
        })
        
    } catch (error) {
        console.log("error while fetching balance" ,error);
        return res.status(501).json({
            ok : false,
            message : "error while fetching balance",
            error : error
        })
    }
}