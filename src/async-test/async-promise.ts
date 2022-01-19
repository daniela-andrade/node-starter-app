import { readFile } from "fs"
import path from "path"
import { promisify } from "util"

// we can return a promise so we don't block the program with I/O
const getText = (path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data: string) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

// one way of using it is to use the .then .catch syntax
getText(path.resolve(__dirname, './data.txt'))
    .then((result: string) => console.log(`Then Catch: ${result}`))
    .catch((error: string) => console.log(`Something went wrong: ${error}`))

// a better way is using the async await syntax
// so we can neatly use the result
// it's specially useful when we are waiting for several promises
const getTextAsync = async (path: string) => {
    try {
        const data = await getText(path)
        console.log(`Async: ${data}`)
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }

}
getTextAsync(path.resolve(__dirname, './data.txt'))

// however, an easier way of promisifying a function is using
// the util method promisify
const getTextPromise = promisify(readFile)
const getTextUtilPromisified = async (path: string) => {
    try {
        const data = await getTextPromise(path, 'utf-8')
        console.log(`Async Promisified: ${data}`)
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }

}
getTextUtilPromisified(path.resolve(__dirname, './data.txt'))

// Another even easier way is to import
import fs from "fs"
const readFilePromise = fs.promises.readFile
const getTextFSPromises = async (path: string) => {
    try {
        const data = await readFilePromise(path, 'utf-8')
        console.log(`FS Promise: ${data}`)
    } catch (error) {
        console.log(`Something went wrong: ${error}`)
    }

}
getTextFSPromises(path.resolve(__dirname, './data.txt'))

console.log('Printing this first')