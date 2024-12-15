const person = {
    id: 1,
    name: 'Kamal',
    age: 30,
}

let {id, name: personName, age} = person;

console.log(personName);
console.log(window.name);