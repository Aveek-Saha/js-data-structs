var { Graph } = require('./dist/js-data-structs.cjs');

// var matrix = [
//     [0, 4, 0, 0, 0, 0, 0, 8, 0],
//     [4, 0, 8, 0, 0, 0, 0, 11, 0],
//     [0, 8, 0, 7, 0, 4, 0, 0, 2],
//     [0, 0, 7, 0, 9, 14, 0, 0, 0],
//     [0, 0, 0, 9, 0, 10, 0, 0, 0],
//     [0, 0, 4, 14, 10, 0, 2, 0, 0],
//     [0, 0, 0, 0, 0, 2, 0, 1, 6],
//     [8, 11, 0, 0, 0, 0, 1, 0, 7],
//     [0, 0, 2, 0, 0, 0, 6, 7, 0]
// ];

var g = Graph(false, true);
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(2, 1, 9);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 4, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

// var g = Graph(true);
// g.addEdge('A', 'C');
// g.addEdge('B', 'C');
// g.addEdge('B', 'D');
// g.addEdge('C', 'E');
// g.addEdge('D', 'F');
// g.addEdge('E', 'F');
// g.addEdge('E', 'H');
// g.addEdge('F', 'G');

// g.fromAdjMatrix(matrix);
// console.log(g.topologicalSort());
console.log(g.dijkstra(0));