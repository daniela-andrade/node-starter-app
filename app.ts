import { IncomingMessage, ServerResponse } from "http"
import http from 'http'

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.write('Hello World :)')
    res.end()
})

server.listen(8080)

// // testing promises, async and await
// require('./async-test/async-promise')