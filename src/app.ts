import express, { Application, Request, Response } from "express"
import path from "path"

const app: Application = express()
const port: number = 8080;

app.use(express.static('./public'))

app.get("/", (req: Request, res: Response) => {
    const filePath: string = path.resolve(__dirname, './navbar-app/index.html')
    res.sendFile(filePath)
})

app.all("*", (req: Request, res: Response) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)

})