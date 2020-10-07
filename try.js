var { Graph } = require('./dist/js-data-structs.cjs');

// var text = 'AABAACAADAABAABA';
// var pattern = 'AABA';

// console.log(RabinKarp(pattern, text, 101, 256));

var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 0]
];
var g = Graph();

g.fromAdjMatrix(matrix);

console.log(g.findEdgeWeight(5, 2));
// console.log(g.edges);
