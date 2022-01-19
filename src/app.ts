import express, { Application, Request, Response } from "express"
import { IncomingMessage, Server, ServerResponse } from "http";

const app: Application = express()
const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);

})