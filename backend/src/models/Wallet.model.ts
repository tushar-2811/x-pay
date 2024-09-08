import mongoose , {Schema , Types} from 'mongoose'
import {Wallet} from './models.type'

const walletSchema:Schema = new mongoose.Schema({
    balance : {
        type : Number,
        default : 0,
        min : [0 , "Can not be negative"]
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
} , {timestamps : true})


const WalletModel = mongoose.models.Wallet as mongoose.Model<Wallet> || mongoose.model<Wallet>("Wallet",walletSchema);

export default WalletModel;