// Binary search

export default function BinarySearch(arr, l, r, key) {
    if(r >= l){
        var mid = l + parseInt((r - l)/2);

        if(arr[mid] == key)
            return mid;
        else if(arr[mid] > key)
            return BinarySearch(arr, l, mid-1, key); 
        else
            return BinarySearch(arr, mid+1, r, key); 
    }

    else
        return -1;
}