import {Document} from 'mongoose'

export interface User extends Document {
      email : String,
      name : String,
      password : String,
      refreshToken : String
}