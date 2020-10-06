export default function heapifyMin(array, n, i) {
    let smallest = i;
    let l = 2 * i + 1; // left child
    let r = 2 * i + 2; // right child

    if (r < n && array[i].key > array[r].key)
        smallest = r;
    if (l < n && array[smallest].key > array[l].key)
        smallest = l;
    if (smallest != i) {
        var temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
        heapifyMin(array, n, smallest);
    }
}