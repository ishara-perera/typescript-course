let numbers: number[] = [1, 2, 3];
let genericNumbers: Array<number> = [1, 2, 3];

let tuple: [number, string, string, number];
tuple = [10, 'four', 'five', 50]

for(let i = 0; i <= tuple.length; i++){
    // console.log(tuple[i])
}

enum Color {
    Red = 1,
    Green = 4,
    Blue = 3
}

let color: Color = Color.Blue;
console.log(color);