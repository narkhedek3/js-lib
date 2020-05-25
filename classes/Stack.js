
const mandatory = () => {
    throw new Error('Stack size is required');
}

class Stack {

    constructor(stackSize = mandatory()) {
        this.stack = [];
        this.top = -1;
        this.size = stackSize;
    }

    isEmpty() { return this.top === -1; }

    isFull() { return this.top === this.size - 1; }

    peek() { return this.isEmpty() ? null : this.stack[this.top]; }

    push(value) {
        if (this.isFull())
            throw new Error('Stack overflow');

        this.stack[++this.top] = value;
    }

    pop() {
        if (this.isEmpty())
            throw new Error('Stack underflow');

        return this.stack[this.top--];
    }

}


module.exports = Stack;

