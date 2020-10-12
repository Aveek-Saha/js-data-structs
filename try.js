var { HeapSort } = require('./dist/js-data-structs.cjs');

var arr = [
    { key: 4, data: 'a' }, 
    { key: 1, data: 'b' }, 
    { key: 3, data: 'c' }, 
    { key: 5, data: 'd' }, 
    { key: 2, data: 'e' }
];
HeapSort(arr, true);

var data = [];

arr.forEach(e => {
    data.push(e.data);
});

console.log(data.toString());