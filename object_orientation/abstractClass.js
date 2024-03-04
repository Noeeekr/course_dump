class CreateHouse {
    // gets the houseType variable through super() in the extended version;
    constructor(houseType) {
        if (this.constructor === CreateHouse) {
            throw new Error("CreateHouse is an abstract class and should not be used with new");
        }

        this.houseType = houseType;
    }
    addRooms() {
        for (let i = 1; i < arguments.length; i++) {
            this[arguments[i]] = true;
        }
    }
    specifyHouse() {
        for (let room in this) {
            if (this[room] === true) console.log(room + " is a room of this house");
        }
    }
}

// extens makes CreateHouse the prototype of CreateRoom;
class CreateRoom extends CreateHouse {    
    constructor(houseType,room) {
        super(houseType); 
        // pass the houseType variable declared in CreateRoom parameter to the abstract function
        this[room] = true;
    }

    // static variable that holds my name in english;
    static creatorsName = "Andrew"; 
    static name() {
        console.log(this.creatorsName)
    }
}

let house = new CreateRoom('mansion',"bathroom")
    house.addRooms("kitchen","garage")
    house.specifyHouse()

// calls an static method that points to the call not the constructor; 
console.log("------- static test --------")
CreateRoom.name()

console.log("------- other test ------")
// throws the Error because CreateHouse is an abstract class ; 
// and should not be used without being called by another class;
try {
    let tulip = new CreateHouse("mansion")
} catch (e) {
    console.log("%ctry-catch used.","color: green;");
    console.log("%cError found: %cCreateHouse is an abstract class and should not be used with new","color: rgb(250,0,0)","color: white;")
}
class BankAccount {
    constructor(money) {
        if (this.constructor === BankAccount) throw new Error("cannot create because this is an abstract class");

        this.money = money;
    }

    deposit(value) {
        this.money += value; 
    }
    withdraw(value) {
        this.money -= value;
    }
}

class Client extends BankAccount {
    constructor(client,number,money) {
        if (!client || !money || !number) throw new Error("parameters are wrong!");
        super(money);
        this.client = client;
        this.number = number;
    }
}

let star = new Client("Andy",99966699966,1000);
console.log("--- bank accont abstract class test --- ")
// starting money 1000;
star.withdraw(100);
console.log(star)