var { Stack } = require('../dist/js-data-structs.cjs');

describe('Check stack functions', () => {
    var stk = Stack();

    it('should create an empty stack', () => {
        expect(stk.isEmpty()).toBe(true);
        stk.push(1);
        expect(stk.isEmpty()).toBe(false);
    });

    it('should show most recently added element', () => {
        stk.push(2);
        stk.push(3);

        expect(stk.peek()).toBe(3);
    });

    it('should return the popped element', () => {
        var x = stk.pop();
        x = stk.pop();

        expect(x).toBe(2);
    });

    it('should be empty', () => {
        stk.pop();

        expect(stk.isEmpty()).toBe(true);
    });
});
