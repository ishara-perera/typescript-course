"use strict";
let notSure = 4;
notSure = 'This is string value';
notSure = true;
let safeNumber;
let unknownMe = 4;
if (typeof unknownMe === 'number') {
    safeNumber = unknownMe;
}
console.log(safeNumber);
let value = 'Hello';
// Type Assertion
let strLength = value.length;
console.log(strLength);
// Type Narrowing
let myString = 'Ishara';
if (typeof myString === 'string') {
    let lenStr = myString.length;
    console.log(lenStr);
}
//# sourceMappingURL=any-unknown.js.map