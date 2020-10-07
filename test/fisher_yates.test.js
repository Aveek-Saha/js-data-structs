var { FisherYates } = require('../dist/js-data-structs.cjs');

describe('Check Fisher Yates algorithm', () => {
    it('should return a shuffled array', () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        expect(FisherYates(arr)).toEqual(arr);

    });

});
