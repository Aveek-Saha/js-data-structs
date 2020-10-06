// Queue

export default function Queue() {
    let queue = [];
    return {
        queue,
        enqueue(value) {
            queue.push(value);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0];
        },
        isEmpty() {
            return queue.length != 0 ? false : true;
        }
    };
}