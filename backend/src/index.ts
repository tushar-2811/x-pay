import express,{Express} from 'express'
import { env } from './config/envConfig';
import connectDB from './db/dbConnection';

const app:Express = express();

const port = env.PORT;

connectDB()
.then(() => { 
    app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})
})
.catch((error) => {
    console.log(`Error while connecting to db : ${error}`);
    throw error;
})
