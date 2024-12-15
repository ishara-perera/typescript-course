const student = {
    id: 1,
    firstName: 'Ishara',
    age: 27,
    isMarried: false,
}

function greet2({id, firstName, age, isMarried}: {id: number, firstName: string, age: number, isMarried: boolean}){
    console.log(`${firstName} is ${isMarried ? 'married!' : 'not married!'}`);
}



greet2(student)