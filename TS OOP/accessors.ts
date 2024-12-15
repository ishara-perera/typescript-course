class User {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter
    set name(newName: string){
        this._name = newName;
    }
}

// instanciate the User
const user = new User("Kamal");

// getting the name using getter
let user_name = user.name; 
console.log(user.name);

// setting the name using setter
user.name = 'Nimal';
console.log(user.name);
