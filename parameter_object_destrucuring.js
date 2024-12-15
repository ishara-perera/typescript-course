"use strict";
const student = {
    id: 1,
    firstName: 'Ishara',
    age: 27,
    isMarried: false,
};
function greet2({ id, firstName, age, isMarried }) {
    console.log(`${firstName} is ${isMarried ? 'married!' : 'not married!'}`);
}
greet2(student);
//# sourceMappingURL=parameter_object_destrucuring.js.map