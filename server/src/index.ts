import express, {Response} from "express";

const app = express()

app.get("/", (_, res: Response) =>{
    res.send("Hello world");
});

app.listen(8080);