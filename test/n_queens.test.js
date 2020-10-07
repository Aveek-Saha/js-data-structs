var { Nqueens } = require('../dist/js-data-structs.cjs');

describe('Check solutions for N Queens problem', () => {
    it('should be able to find a soltion to N Queens for all values of N', () => {

        expect(Nqueens(0)).toEqual([]);
        expect(Nqueens(4)).toEqual([ 
            [ 0, 0, 1, 0 ], 
            [ 1, 0, 0, 0 ], 
            [ 0, 0, 0, 1 ], 
            [ 0, 1, 0, 0 ] 
        ]);
        expect(Nqueens(5)).toEqual([
            [ 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 0, 0, 0, 1 ],
            [ 0, 0, 1, 0, 0 ]
        ]);
        expect(Nqueens(7)).toEqual([
            [ 1, 0, 0, 0, 0, 0, 0],
            [ 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 1, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 1, 0, 0, 0 ]
        ]);
    });

});
