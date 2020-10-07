var { Trie, alphabetSize } = require('../dist/js-data-structs.cjs');

describe('Check trie functions', () => {
    it('should be able to add and search for words in the trie', () => {
        var tr = Trie(alphabetSize);

        var list = ['the', 'a', 'there', 'answer', 'any','by', 'bye', 'their'];
        list.forEach(word => {
            tr.insertWord(word);
        });

        expect(tr.search('hello')).toBe(false);
        expect(tr.search('their')).toBe(true);
    });
});