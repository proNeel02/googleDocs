import express,{ Express,Request,Response } from "express";
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 8080

app.get('/', (req:Request, res:Response) => {
    res.send("Hello Express + TypeScript Server");
});

app.listen(port, () => {
console.log("listing on Port : ",port);
});