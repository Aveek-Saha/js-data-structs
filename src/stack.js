// Stack

export default function Stack() {
    let stack = [];
    return {
        stack,
        push(value) {
            stack.push(value);
        },
        pop() {
            return stack.pop();
        },
        peek() {
            return stack[stack.length - 1];
        },
        isEmpty() {
            return stack.length != 0 ? false : true;
        }
    }
}