"use strict";
let numbers = [1, 2, 3];
let genericNumbers = [1, 2, 3];
let tuple;
tuple = [10, 'four', 'five', 50];
for (let i = 0; i <= tuple.length; i++) {
    // console.log(tuple[i])
}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let color = Color.Blue;
console.log(color);
//# sourceMappingURL=arrays.js.map