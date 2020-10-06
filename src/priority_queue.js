import { default as HeapSort } from './heapsort';

// Priority Queue

export default function PriorityQueue() {
    let queue = [];
    return {
        queue,
        enqueue(value, key) {
            queue.push({ data: value, key: key });
            HeapSort(queue);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0].data;
        },
        isEmpty() {
            return queue.length != 0 ? false : true;
        }
    };
}