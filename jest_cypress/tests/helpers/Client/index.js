module.exports = class Client{
    constructor(id=0,name='',tel=''){
        this.id = id
        this.name = name
        this.tel = tel
    }
    
    static first(){
        return new Client()
    }
    static all(){
        return [
            new Client(1,'Douglas','(99) 9 9999-9999'),
            new Client(2,'Jose','(99) 9 9999-9999'),
            new Client(3,'Maria','(99) 9 9999-9999'),
            new Client(4,'Joao','(99) 9 9999-9999'),
            new Client(5,'Antonia','(99) 9 9999-9999'),
            new Client(6,'Carlos','(99) 9 9999-9999'),
            new Client(7,'Clara','(99) 9 9999-9999'),
            new Client(8,'Rosa','(99) 9 9999-9999'),
            new Client(9,'Pedro','(99) 9 9999-9999'),
            new Client(10,'Lucas','(99) 9 9999-9999')
        ]
    }

    upper(){
        return this.name.toUpperCase()
    }
}