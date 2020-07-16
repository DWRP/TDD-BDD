const Client = require('./../helpers/Client')

describe('Clients',()=>{
    beforeEach(()=>{

    })

    it('Return only one', ()=>{
        let clients = Client.first()
        expect(clients.id).not.toBeUndefined()
        expect(clients.name).not.toBeUndefined()
        expect(clients.tel).not.toBeUndefined()
    })

    it('Return all', ()=>{
        let clients = Client.all()
        expect(clients.length).toEqual(10)
    })

    it('Client Name in Upper Case', ()=>{
        let clients = Client.first()
        clients.name = "Douglas"
        expect(clients.upper()).toEqual("DOUGLAS")
    })

    
})
