"use strict";
function identity(value) {
    return value;
}
console.log(identity('Hello'));
// console.log(identity<number>)(5);
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    log() {
        console.log(stack);
    }
}
// Initialize a stack
const stack = new Stack();
stack.push(1);
stack.log();
stack.push(2);
stack.log();
stack.peek();
stack.push(3);
stack.log();
stack.pop();
stack.log();
stack.peek();
//# sourceMappingURL=generics.js.map