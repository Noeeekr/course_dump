
;(function(){
    let calls = 0;
    let quantity = 0;

    this.product = {
        get quantityCalls() {
            return calls;
        },
        get pQuantity() {
            calls++;
            return quantity;
        },
        set pQuantity(number) {
            if (number > -1) quantity = number;
            return this;
        }
    }

})();

// console.log(product.pQuantity = 30);
// console.log(product.pQuantity);
// console.log(product.quantityCalls);

/* another test */

;(function(){
    let users = [];

    this.userinfo = {
        get userList() {
            return users;
        },
        get lastUser() {
            return users[0] ? users[users.length - 1] : "not a single user exists";
        },
        set lastUser(newUser) {
            return (newUser && users.indexOf(newUser)) < 0 ? users.push(newUser) : console.log("cannot add user");
        }
    }
})()

console.log(userinfo.lastUser = "andy")
console.log(userinfo.lastUser = "peter")
console.log(userinfo.lastUser = "leticia")
console.log(userinfo.lastUser = "cameron")
console.log(userinfo.lastUser = "august")

console.log(userinfo.lastUser)
console.log(userinfo.userList)
console.log(delete userinfo.userList[0])
console.log(userinfo.userList)