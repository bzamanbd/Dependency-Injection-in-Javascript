class Database{ 
    get(){ 
        return 'getting data from database'
    }

    store(data){ 
        return `storing ${JSON.stringify(data)} to database`
    }

}


class User{ 
    constructor(database){ 
        this.db = database
    }

    find(){ 
        return this.db.get()
    }

    create(data){ 
        return this.db.store(data)
    }
}


const d = new Database()
const u = new User(d) 

console.log(u.create({"city":"dhaka"}));
console.log(u.find());