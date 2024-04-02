let str = "olá, eu sou o "

try {
    str.addCharacter("Goku")    
} catch(e) {
    console.log("%c" + "@report Error: prototype [addCharacter] not found, so it was created by polyfill","color: rgb(250,100,100);")
    String.prototype.addCharacter = function (character) {
        return this + character;
    }
}
