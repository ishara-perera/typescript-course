var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
    }
    Object.defineProperty(User.prototype, "name", {
        // Getter
        get: function () {
            return this._name;
        },
        // Setter
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// instanciate the User
var user = new User("Kamal");
// getting the name using getter
var user_name = user.name;
console.log(user.name);
// setting the name using setter
user.name = 'Nimal';
console.log(user.name);
