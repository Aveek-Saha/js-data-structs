var { LevenshteinDistance } = require('../dist/js-data-structs.cjs');

describe('Check Levenshtein Distance algorithm', () => {
    it('should calculate the minimum edit distance between two strings', () => {
        expect(LevenshteinDistance('kitten', 'sitting')).toBe(3);

        expect(LevenshteinDistance('hello', 'hello')).toBe(0);

        expect(LevenshteinDistance('hello', 'kelp')).toBe(3);

        expect(LevenshteinDistance('hello', '')).toBe(5);

        expect(LevenshteinDistance('', 'hello')).toBe(5);
    });
});
