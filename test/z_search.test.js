var { ZSearch } = require('../dist/js-data-structs.cjs');

describe('Check Z algorithm', () => {
    it('should be able to search for pattern in the string', () => {

        var text = 'aabcaabxaaaz';

        expect(ZSearch(text, 'ab')).toEqual([ 1, 5 ]);
    });

    it('should return empty array if pattern not found', () => {

        var text = 'aabcaabxaaaz';

        expect(ZSearch(text, 'asb')).toEqual([]);
    });
});
