"use strict";
function add(x, y) {
    return x + y;
}
console.log(add(4.5, 9.9));
// Optional Parameters
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
// Default Parameters
// Rest Parameters
function buildNameWithRest(firstName, ...restOfName) {
    let fullname = firstName + ' ' + restOfName.join(' ');
    return fullname;
}
function buildNameWithRest2(...restOfName) {
    let fullname = restOfName.join(' ');
    return fullname;
}
console.log(buildNameWithRest("Joseph", "Samuel", "Lucas", "MacKinzie"));
console.log(buildNameWithRest2("Joseph", "Samuel", "Lucas", "MacKinzie"));
console.log(buildName('Ishara', 'Perera'));
//# sourceMappingURL=functions.js.map