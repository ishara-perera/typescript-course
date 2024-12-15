var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Paraent Class / Super Class
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduct = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
// Child Class / Sub Class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // public university: string;
    function Student(id, name, age, university) {
        var _this = _super.call(this, id, name, age) || this; // calling the super class constructor
        _this.id = id;
        _this.name = name;
        _this.age = age;
        _this.university = university;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("I'm studying!");
    };
    return Student;
}(Person));
// Instanciate the Person class
var person = new Person(1, 'Alice', 30);
// Instanciate the Student class
var student = new Student(1001, 'Bob', 27, 'UOC');
student.introduct();
student.study();
