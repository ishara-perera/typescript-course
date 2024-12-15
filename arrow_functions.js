"use strict";
// syntax:  data_type function_name = (param1, param2, param3, ...) => expression
// No parameters
const greet = () => 'Hello World';
console.log(greet());
// Single parameter
const my_func = (x) => x * 2;
console.log(my_func(10));
// Returning an object
const createUser = (id, name) => ({ id, name }); // Use paranthesis to avoid sysntax errors
console.log(createUser(1, 'Ishara'));
// Rest arguements
const getSecondName = (...setOfNames) => setOfNames[1];
console.log(getSecondName('Kamal', 'Nimal', 'Amal', 'Sunil'));
//# sourceMappingURL=arrow_functions.js.map