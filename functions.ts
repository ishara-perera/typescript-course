function add(x: number, y: number) : number {
    return x + y;
}

console.log(add(4.5, 9.9));

// Optional Parameters
function buildName(firstName: string, lastName?: string): string {
    if (lastName){
    return firstName + ' ' + lastName;
    } else {
    return firstName;
    }
}

// Default Parameters

// Rest Parameters
function buildNameWithRest(firstName: string, ...restOfName: string[]){
    let fullname: string = firstName + ' ' + restOfName.join(' ');
    return fullname;
}


function buildNameWithRest2(...restOfName: string[]){
    let fullname: string = restOfName.join(' ');
    return fullname;
}

console.log(buildNameWithRest("Joseph", "Samuel", "Lucas", "MacKinzie"));
console.log(buildNameWithRest2("Joseph", "Samuel", "Lucas", "MacKinzie"));




console.log(buildName('Ishara', 'Perera'));