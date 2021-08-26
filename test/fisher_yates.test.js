var { FisherYates } = require('../dist/js-data-structs.cjs');

describe('Check Fisher Yates algorithm', () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    it('should return a shuffled array', () => {
        expect(FisherYates(arr)).toEqual(arr);
    });
});
