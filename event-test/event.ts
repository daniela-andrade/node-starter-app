import EventEmitter from "events"

const customEmitter = new EventEmitter()
const RESPONSE_EVENT = 'response'

customEmitter.on(RESPONSE_EVENT, (id: string, name: string) => {
    console.log(`Response received. Id: ${id}, Name: ${name}`);

})

customEmitter.on(RESPONSE_EVENT, () => {
    console.log(`Response received.`);

})

customEmitter.emit(RESPONSE_EVENT, '001', 'Dani')