var { PriorityQueue } = require('../dist/js-data-structs.cjs');

describe('Check priority queue functions', () => {
    it('should create an empty priority queue', () => {
        var q = PriorityQueue();
        expect(q.isEmpty()).toBe(true);
    });

    it('should return the element with highest priority', () => {
        var q = PriorityQueue();
        q.enqueue('this', 4);
        q.enqueue('that', 1);
        q.enqueue('here', 7);

        expect(q.peek()).toBe('that');

        q.enqueue('there', 3);
        q.enqueue('where', 9);
        q.enqueue('near', 0);
        q.enqueue('hear', 2);

        expect(q.peek()).toBe('near');
    });

    it('should dequeue the element with highest priority', () => {
        var q = PriorityQueue();
        q.enqueue('this', 4);
        q.enqueue('that', 1);
        q.enqueue('here', 7);
        q.enqueue('there', 3);
        q.enqueue('where', 9);
        q.enqueue('near', 0);
        q.enqueue('hear', 2);

        q.dequeue();
        expect(q.peek()).toBe('that');

        q.dequeue();
        expect(q.peek()).toBe('hear');

        q.dequeue();
        expect(q.peek()).toBe('there');
    });

    it('should return the dequeued element', () => {
        var q = PriorityQueue();
        q.enqueue('this', 4);
        q.enqueue('that', 1);
        q.enqueue('here', 7);
        q.enqueue('there', 3);
        q.enqueue('where', 9);
        q.enqueue('near', 0);
        q.enqueue('hear', 2);

        var x = q.dequeue();
        expect(x).toEqual({ data: 'near', key: 0 });

        x = q.dequeue();
        expect(x).toEqual({ data: 'that', key: 1 });
    });

    it('should be empty after all elements are dequeued', () => {
        var q = PriorityQueue();
        q.enqueue('this', 4);
        q.enqueue('that', 1);
        q.enqueue('here', 7);
        q.enqueue('there', 3);
        q.enqueue('where', 9);
        q.enqueue('near', 0);
        q.enqueue('hear', 2);

        q.dequeue();
        q.dequeue();
        q.dequeue();
        q.dequeue();
        q.dequeue();
        q.dequeue();
        expect(q.isEmpty()).toBe(false);

        q.dequeue();
        expect(q.isEmpty()).toBe(true);
    });
});
