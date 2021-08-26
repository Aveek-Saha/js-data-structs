// Binary search

/**
 * This function finds the index of the key in the array using binary search.
 * @param {any[]} arr - The array of elements to search from
 * @param {any} key - The element to look for in the array
 * @param {number} l - The start of the array (0)
 * @param {number} r - The length of the array (array length)
 * @returns {number} - The index at which the element was found in the array, -1 if not found.
 */
export default function BinarySearch(arr, l, r, key) {
    if (r >= l) {
        var mid = l + parseInt((r - l) / 2);

        if (arr[mid] == key) return mid;
        else if (arr[mid] > key) return BinarySearch(arr, l, mid - 1, key);
        else return BinarySearch(arr, mid + 1, r, key);
    } else return -1;
}
