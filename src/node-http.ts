import { IncomingMessage, ServerResponse } from "http"
import http from 'http'

// Another way of creating the request listener is simply
// passing the request callback to the createServer function
// const server = http.createServer((req, res) => {
//     res.end('Hello World')
// })

// Using the Event Emitter API
const server = http.createServer()

// Listener for the 'request' event
server.on('request', (req: IncomingMessage, res: ServerResponse) => {
    res.write('Hello World :)')
    res.end()
})

server.listen(8080)

// testing promises, async and await
// require('./async-test/async-promise')

// testing event emmiter
// require('./event-test/event')

// testing streams
// require('./streams-test/streams')