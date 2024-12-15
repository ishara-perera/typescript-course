let notSure: any = 4
notSure = 'This is string value'
notSure = true

let safeNumber: number | undefined;

let unknownMe: unknown = 4;
if(typeof unknownMe === 'number'){
    safeNumber = unknownMe;
}

console.log(safeNumber);

let value: unknown = 'Hello';


// Type Assertion
let strLength = (value as string).length;
console.log(strLength);

// Type Narrowing
let myString: unknown = 'Ishara'
if (typeof myString === 'string'){
    let lenStr = myString.length;
    console.log(lenStr);
}
