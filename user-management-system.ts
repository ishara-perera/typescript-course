interface UserManagement<T> {
  addUser(user: User<T>): User<T>[];
  getUser(id: number): User<T> | undefined;
  updateUser(id: number, user: Partial<User<T>>): User<T>[];
  removeUser(id: number): User<T>[];
  checkUserDetails(user: User<Metadata>): void;
  printUserDetails(user: User<T>): void;
}

class User<T> {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public metadata?: T
  ) {}
}

type Metadata = { [key: string]: any };
type UserOrNull = User<Metadata> | null;

class UserService<UserOrNull> implements UserManagement<UserOrNull> {
  private users: User<any>[] = [];

  // add a user
  addUser = (user: User<UserOrNull>): User<UserOrNull>[] => {
    this.users.push(user);
    return this.users;
  };

  // get a user
  getUser = (id: number): User<UserOrNull> | undefined => {
    const users = this.users.filter((user) => user.id === id);
    return users.length > 0 ? users[0] : undefined;
  };

  // update a user
  updateUser = (
    id: number,
    user: Partial<User<UserOrNull>>
  ): User<UserOrNull>[] => {
    let userArrToUpdate: User<UserOrNull>[] | undefined | null =
      this.users.filter((user) => user.id === id);

    // throw an error if user is not found
    if (userArrToUpdate.length === 0) {
      throw new Error(`User with user ${id} could not be found!`);
    }

    const userObjToUpdate: User<UserOrNull> = userArrToUpdate[0];

    const newUser: User<UserOrNull> = { ...userObjToUpdate, ...user };

    // const index = users.findIndex(user => user.id === id);

    let index: number = -1;

    // finding the index of user object to be updated
    for (let i: number = 0; i <= this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }

    this.users[index] = newUser;

    return this.users;
  };

  // delete a user
  removeUser = (id: number): User<UserOrNull>[] => {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  };

  // check user details
  checkUserDetails = (user: User<Metadata>): void => {
    if (user.name && user.age) {
      console.log("User details are available!");
    } else {
      console.log("User details are incomplete");
    }
  };

  // print user details
  printUserDetails = (user: User<UserOrNull>): void => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
  };
}

// const users: User<any>[] = [
//     new User(1, "Alice", 30, { role: "admin" }),
//     new User(2, "Bob", 25, { role: "user" }),
// ];

const user1 = new User(1, "Kamal", 30, "metadata1");
const user2 = new User(2, "Nimal", 30, "metadata2");

const userService = new UserService();

userService.addUser(user1);
userService.addUser(user2);

console.log(userService.getUser(1));
console.log(userService.removeUser(1));

const userUpdate: Partial<UserOrNull> = {
  name: "Amal",
};

console.log(userService.updateUser(2, userUpdate));

// using type a
const user = userService.getUser(2);
userService.printUserDetails(user as User<UserOrNull>);
