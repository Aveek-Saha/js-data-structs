var { Stack } = require('../dist/js-data-structs.cjs');

describe('Check stack functions', () => {
    it('should create an empty stack', () => {
        var stk = Stack();
        expect(stk.isEmpty()).toBe(true);
        stk.push(1);
        expect(stk.isEmpty()).toBe(false);
    });

    it('should show most recently added element', () => {
        var stk = Stack();
        stk.push(1);
        stk.push(2);
        stk.push(3);

        expect(stk.peek()).toBe(3);
    });

    it('should return the popped element', () => {
        var stk = Stack();
        stk.push(1);
        stk.push(2);
        stk.push(3);

        var x = stk.pop();
        x = stk.pop();

        expect(x).toBe(2);
    });

    it('should be empty', () => {
        var stk = Stack();
        stk.push(1);
        stk.push(2);
        stk.push(3);
        stk.pop();
        stk.pop();
        stk.pop();

        expect(stk.isEmpty()).toBe(true);
    });
});
