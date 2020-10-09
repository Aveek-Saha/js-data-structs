import { default as heapify } from './heapify';
import { default as heapifyMin } from './heapify_min';

// Heap Sort

export default function HeapSort(array, min = false) {
    let n = array.length;
    for (let i = parseInt(n / 2 - 1); i > -1; i--) {
        if (!min)
            heapify(array, n, i);
        else
            heapifyMin(array, n, i);
    }

    for (let j = n - 1; j > 0; j--) {
        let temp = array[j];
        array[j] = array[0];
        array[0] = temp;
        if (!min)
            heapify(array, j, 0);
        else
            heapifyMin(array, j, 0);
    }
}