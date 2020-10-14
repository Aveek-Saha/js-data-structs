var { RabinKarp } = require('../dist/js-data-structs.cjs');

describe('Check Binary search', () => {
    it('should return the indices of the pattern if matched', () => {
        var text = 'AABAACAADAABAABA';
        var pattern = 'AABA';

        expect(RabinKarp(pattern, text, 101, 256)).toEqual([ 0, 9, 12 ]);
    });

    it('should return empty array if the element is not found', () => {
        var text = 'AABAACAADAABAABA';
        var pattern = 'AAXBA';

        expect(RabinKarp(pattern, text, 101, 256)).toEqual([]);
    });

});