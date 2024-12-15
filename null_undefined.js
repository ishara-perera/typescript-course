"use strict";
function sayHello(name) {
    if (name === null) {
        console.log('Hello NULL person!');
    }
    else if (name === undefined) {
        console.log('Hello UNDEFINED person!');
    }
    else {
        console.log(`Hello ${name}`);
    }
}
sayHello();
sayHello(null);
sayHello('Ishara');
// null - intentionally absence of a value
// undefined - not initialized
//# sourceMappingURL=null_undefined.js.map