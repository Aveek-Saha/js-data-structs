var {BinaryTree, order} = require('../dist/js-data-structs.cjs');


var tree = BinaryTree('4');

var a = tree.root.addChild('2');
var b = tree.root.addChild('5');

a.addChild('1');
a.addChild('3');

b.addChild('6');
b.addChild('7');

describe('Check if nodes are printing in the correct order', () => {
    it('should print nodes in post order', () => {
        expect(tree.display(order.post)).toBe('1 3 2 6 7 5 4 ');
    });

    it('should print nodes in pre order', () => {
        expect(tree.display(order.pre)).toBe('4 1 3 2 6 7 5 ');
    });

    it('should print nodes in order', () => {
        expect(tree.display(order.in)).toBe('1 2 3 4 6 5 7 ');
    });
});
