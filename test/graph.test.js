var { Graph } = require('../dist/js-data-structs.cjs');

describe('Check all graph functions', () => {
    it('should create a graph from a matrix', () => {

        var matrix = [
            [0, 4, 0, 0, 0, 0, 0, 8, 0],
            [4, 0, 8, 0, 0, 0, 0, 11, 0],
            [0, 8, 0, 7, 0, 4, 0, 0, 2],
            [0, 0, 7, 0, 9, 14, 0, 0, 0],
            [0, 0, 0, 9, 0, 10, 0, 0, 0],
            [0, 0, 4, 14, 10, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 0, 1, 6],
            [8, 11, 0, 0, 0, 0, 1, 0, 7],
            [0, 0, 2, 0, 0, 0, 6, 7, 0]
        ];
        var g = Graph(false, true);

        g.fromAdjMatrix(matrix);
        expect(g.displayEdges()).toEqual([
            [ 0, 1 ], 4, [ 1, 0 ], 4, [ 0, 7 ], 8, 
            [ 7, 0 ], 8, [ 1, 2 ], 8, [ 2, 1 ], 8, 
            [ 1, 7 ], 11, [ 7, 1 ], 11, [ 2, 3 ], 7, 
            [ 3, 2 ], 7, [ 2, 5 ], 4, [ 5, 2 ], 4, 
            [ 2, 8 ], 2, [ 8, 2 ], 2, [ 3, 4 ], 9,
            [ 4, 3 ], 9, [ 3, 5 ], 14, [ 5, 3 ], 14, 
            [ 4, 5 ], 10, [ 5, 4 ], 10, [ 5, 6 ], 2, 
            [ 6, 5 ], 2, [ 6, 7 ], 1, [ 7, 6 ], 1, 
            [ 6, 8 ], 6, [ 8, 6 ], 6, [ 7, 8 ], 7, 
            [ 8, 7 ], 7
        ]);
    });

    it('should create a graph by adding edges', () => {

        var g = Graph(false, true);

        g.addEdge(0, 1, 4);
        g.addEdge(0, 7, 8);
        g.addEdge(1, 2, 8);
        g.addEdge(1, 7, 11);
        g.addEdge(2, 3, 7);
        g.addEdge(2, 8, 2);
        g.addEdge(2, 5, 4);
        g.addEdge(3, 4, 9);
        g.addEdge(3, 5, 14);
        g.addEdge(4, 5, 10);
        g.addEdge(5, 6, 2);
        g.addEdge(6, 7, 1);
        g.addEdge(6, 8, 6);
        g.addEdge(7, 8, 7);

        expect(g.displayEdges()).toEqual([
            [ 0, 1 ], 4, [ 1, 0 ], 4, [ 0, 7 ],
            8, [ 7, 0 ], 8, [ 1, 2 ], 8,
            [ 2, 1 ], 8, [ 1, 7 ], 11, [ 7, 1 ],
            11, [ 2, 3 ], 7, [ 3, 2 ], 7,
            [ 2, 8 ], 2, [ 8, 2 ], 2, [ 2, 5 ],
            4, [ 5, 2 ], 4, [ 3, 4 ], 9,
            [ 4, 3 ], 9, [ 3, 5 ], 14, [ 5, 3 ],
            14, [ 4, 5 ], 10, [ 5, 4 ], 10,
            [ 5, 6 ], 2, [ 6, 5 ], 2, [ 6, 7 ],
            1, [ 7, 6 ], 1, [ 6, 8 ], 6,
            [ 8, 6 ], 6, [ 7, 8 ], 7, [ 8, 7 ],
            7
        ]);
    });

    it('should return the correct order of nodes for BFS', () => {

        var g = Graph(false, true);

        g.addEdge(0, 1, 4);
        g.addEdge(0, 7, 8);
        g.addEdge(1, 2, 8);
        g.addEdge(1, 7, 11);
        g.addEdge(2, 3, 7);
        g.addEdge(2, 8, 2);
        g.addEdge(2, 5, 4);
        g.addEdge(3, 4, 9);
        g.addEdge(3, 5, 14);
        g.addEdge(4, 5, 10);
        g.addEdge(5, 6, 2);
        g.addEdge(6, 7, 1);
        g.addEdge(6, 8, 6);
        g.addEdge(7, 8, 7);

        expect(g.BFS(3).toString()).toBe('3,2,4,5,1,8,6,0,7');
    });

    it('should sort nodes in topological order', () => {

        var g = Graph(true);
        g.addEdge('A', 'C');
        g.addEdge('B', 'C');
        g.addEdge('B', 'D');
        g.addEdge('C', 'E');
        g.addEdge('D', 'F');
        g.addEdge('E', 'F');
        g.addEdge('E', 'H');
        g.addEdge('F', 'G');

        expect(g.topologicalSort().toString()).toBe('B,D,A,C,E,H,F,G');
    });

    it('should return the shortest distance of all nodes from the start node', () => {

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

        expect(g.dijkstra(0)).toEqual({
            '0': 0,
            '1': 4,
            '2': 12,
            '3': 19,
            '4': 21,
            '5': 11,
            '6': 9,
            '7': 8,
            '8': 14
        });
    });


});

