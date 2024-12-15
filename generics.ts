function identity<T>(value: T): T{
    return value;
}

console.log(identity<string>('Hello'));
// console.log(identity<number>)(5);


class Stack<T>{
    private stack: T[] = [];

    push(item: T): void{
        this.stack.push(item);
    }

    pop(): T | undefined{
        return this.stack.pop();
    }

    peek(): T | undefined{
        return this.stack[this.stack.length - 1]
    }

    log(): void{
        console.log(stack);
    }
}

// Initialize a stack
const stack = new Stack<number>();
stack.push(1);
stack.log();

stack.push(2);
stack.log();

stack.peek()

stack.push(3);
stack.log()

stack.pop();
stack.log()
stack.peek()
