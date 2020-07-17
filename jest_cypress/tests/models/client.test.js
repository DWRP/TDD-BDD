const assert = require('assert')
const Client = require('./../helpers/Client')

describe('Clients',()=>{
    beforeEach(()=>{

    })

    test('Return only one', ()=>{
        let clients = Client.first()
        expect(clients.id).not.toBeUndefined()
        expect(clients.name).not.toBeUndefined()
        expect(clients.tel).not.toBeUndefined()
    })

    test('Return all', ()=>{
        let clients = Client.all()
        expect(clients.length).toEqual(10)
    })

    test('Client Name in Upper Case', ()=>{
        let clients = Client.first()
        clients.name = "Douglas"
        expect(clients.upper()).toEqual("DOUGLAS")
    })

    
})
