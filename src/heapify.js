export default function heapify(array, n, i) {
    let largest = i;
    let l = 2 * i + 1; // left child
    let r = 2 * i + 2; // right child

    if (r < n && array[i].key < array[r].key)
        largest = r;
    if (l < n && array[largest].key < array[l].key)
        largest = l;
    if (largest != i) {
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        heapify(array, n, largest);
    }
}