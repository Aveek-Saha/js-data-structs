var { Tree } = require('../dist/js-data-structs.cjs');

var a = Tree('a');
var b = a.root.addChild('b');
var c = a.root.addChild('c');
a.root.addChild('d');
a.root.addChild('e');

b.addChild('f');
var g = b.addChild('g');

c.addChild('h');
g.addChild('i');

describe('Create a Tree', () => {
    it('should display nodes in the correct order', () => {
        expect(a.display()).toBe('a b f g i c h d e ');
    });
});
