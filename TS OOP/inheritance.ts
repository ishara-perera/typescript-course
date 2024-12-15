// Paraent Class / Super Class
class Person{
    constructor(public id: number, public name: string, public age: number) {}

    introduct(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Child Class / Sub Class
class Student extends Person{
    // public university: string;
    constructor(public id: number, public name: string, public age: number, public university: string){
        super(id, name, age);   // calling the super class constructor
    }

    study(): void {
        console.log("I'm studying!");
    }
}

// Instanciate the Person class
const person = new Person(1, 'Alice', 30);

// Instanciate the Student class
const student = new Student(1001, 'Bob', 27, 'UOC');

student.introduct();
student.study();

// person.study();