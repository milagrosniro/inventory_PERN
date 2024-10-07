import express from "express";
import swaggerUi from 'swagger-ui-express';
import db from "./config/db";
import swaggerSpec, { swaggerOptions } from "./config/swagger";
import router from "./routes/routes";

export const connectDB = async () =>{
    try{
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta.bold('DB connected succefully'))
    }catch(err){
         console.log('Error connection DB')
    }
}

connectDB();
const server = express();

server.use(express.json())

server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions))

export default server

