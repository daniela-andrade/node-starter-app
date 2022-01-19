// Writeable --> write data sequentially
// Readeable --> read data sequentially
// Duplex --> read and write data sequentially
// Transform --> data can be modified when writting or reading

// streams extend EventEmitter

// when we use readFile, we read the whole file at once
// but the file can very big

// Create big file
// import { writeFileSync } from "fs";
import path from "path"

// const text: string = "This is a line of text"
const filePath: string = path.resolve(__dirname, './big.txt')
// for (let i: number = 0; i < 10000; i++) {
//     writeFileSync(filePath, text, { flag: 'a' })
// }

// reading the big file as a stream
import { createReadStream, ReadStream } from "fs"

const streamOptions: object = {
    highWaterMark: 9000,
    encoding: 'utf-8'
}
const stream: ReadStream = createReadStream(filePath, streamOptions)
stream.on('data', (result) => {
    // this will read data in chunks of 64kb by default -> change with highWaterMark
    console.log(result)
})

stream.on('error', (error) => console.log(`Something went wrong:${error}`))