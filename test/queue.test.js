var { Queue } = require('../dist/js-data-structs.cjs');

describe('Check queue functions', () => {
    var q = Queue();

    it('should create an empty queue', () => {
        expect(q.isEmpty()).toBe(true);
    });

    it('should show the first element in the queue', () => {
        q.enqueue(4);
        q.enqueue(1);
        q.enqueue(7);
        q.enqueue(3);
        q.enqueue(9);

        expect(q.peek()).toBe(4);
    });

    it('should return the dequeued element', () => {
        q.dequeue();
        q.dequeue();
        var x = q.dequeue();

        expect(x).toBe(7);
    });

    it('should be empty', () => {
        q.dequeue();
        q.dequeue();
        q.dequeue();

        expect(q.isEmpty()).toBe(true);
    });
});
