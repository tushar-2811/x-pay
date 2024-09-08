import {Document , Types} from 'mongoose'

export interface User extends Document {
      email : string;
      name : string;
      password : string;
      refreshToken : string;
}

export interface Wallet extends Document{
      balance : number;
      owner : Types.ObjectId
}