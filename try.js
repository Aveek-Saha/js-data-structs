var { Stack } = require('./dist/js-data-structs.cjs');

var stk = Stack();

stk.push(1);
stk.push(2);
stk.push(3);

console.log(stk.peek());

stk.push(5);
stk.push(9);

var x = stk.pop();
x = stk.pop();


console.log(stk.peek());
console.log(x);