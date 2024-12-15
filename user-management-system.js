var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User = /** @class */ (function () {
    function User(id, name, age, metadata) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.metadata = metadata;
    }
    return User;
}());
var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.users = [];
        // add a user
        this.addUser = function (user) {
            _this.users.push(user);
            return _this.users;
        };
        // get a user
        this.getUser = function (id) {
            var users = _this.users.filter(function (user) { return user.id === id; });
            return users.length > 0 ? users[0] : undefined;
        };
        // update a user
        this.updateUser = function (id, user) {
            var userArrToUpdate = _this.users.filter(function (user) { return user.id === id; });
            // throw an error if user is not found
            if (userArrToUpdate.length === 0) {
                throw new Error("User with user ".concat(id, " could not be found!"));
            }
            var userObjToUpdate = userArrToUpdate[0];
            var newUser = __assign(__assign({}, userObjToUpdate), user);
            // const index = users.findIndex(user => user.id === id);
            var index = -1;
            // finding the index of user object to be updated
            for (var i = 0; i <= _this.users.length; i++) {
                if (_this.users[i].id === id) {
                    index = i;
                    break;
                }
            }
            _this.users[index] = newUser;
            return _this.users;
        };
        // delete a user
        this.removeUser = function (id) {
            _this.users = _this.users.filter(function (user) { return user.id !== id; });
            return _this.users;
        };
        this.printUserDetails = function (user) {
            console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Age: ").concat(user.age));
        };
    }
    return UserService;
}());
// const users: User<any>[] = [
//     new User(1, "Alice", 30, { role: "admin" }),
//     new User(2, "Bob", 25, { role: "user" }),
// ];
var user1 = new User(1, "Kamal", 30, "metadata1");
var user2 = new User(2, "Nimal", 30, "metadata2");
var userService = new UserService();
userService.addUser(user1);
userService.addUser(user2);
console.log(userService.getUser(1));
console.log(userService.removeUser(1));
var userUpdate = {
    name: "Amal",
};
console.log(userService.updateUser(2, userUpdate));
// using type a
var user = userService.getUser(2);
userService.printUserDetails(user);
