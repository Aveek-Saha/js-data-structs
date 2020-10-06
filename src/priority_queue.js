// Priority Queue

export function PriorityQueue() {
    let queue = [];
    return {
        queue,
        enqueue(value, key) {
            queue.push({ value, key })
            HeapSort(queue);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0].value;
        },
        isEmpty() {
            return queue.length != 0 ? false : true;
        }
    }
}