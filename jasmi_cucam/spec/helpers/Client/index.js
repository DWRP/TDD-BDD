module.exports = class Client{
    constructor(){
        this.id = 0
        this.name = ''
        this.tel = ''
    }
    
    static first(){
        return new Client()
    }
    static all(){
        return [
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client()
        ]
    }

    upper(){
        return this.name.toUpperCase()
    }
}