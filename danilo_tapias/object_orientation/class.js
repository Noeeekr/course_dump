// class extension;
function CreateHouse() {
    this.addRoom = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[arguments[i]] = true;
        }
    }

    this.specifyHouse = function (){
        for (room in this) {
            if (this[room] === true) {
                console.log(room + " is a room of the house")
            }
        }
    }

    return this;
}
// class;
function CreateRoom(room) {
    this[room] = true;
}

CreateRoom.prototype = new CreateHouse();
CreateRoom.prototype.constructor = CreateHouse;

let house = new CreateRoom("cozinha");
house.addRoom("banheiro")
house.addRoom("quarto")
house.addRoom("sala","armazem")
house.specifyHouse()
