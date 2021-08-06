import express, {Response} from "express";

const app = express()

app.get("/", (_, res: Response) =>{
    res.send("Hello world");
});

console.log("Start listening at 8080");
app.listen(8080);