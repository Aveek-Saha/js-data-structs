var BinaryTree = require('../dist/js-data-structs.cjs').BinaryTree;
var order = require('../dist/js-data-structs.cjs').order;

var tree = BinaryTree('4');

var a = tree.root.addChild('2');
var b = tree.root.addChild('5');

a.addChild('1');
a.addChild('3');

b.addChild('6');
b.addChild('7');

describe('Print in post order', () => {
    test('nodes should print in the correct order', () => {
        expect(tree.display(order.post)).toBe('1 3 2 6 7 5 4 ');
    });
});

describe('Print in pre order', () => {
    test('nodes should print in the correct order', () => {
        expect(tree.display(order.pre)).toBe('4 1 3 2 6 7 5 ');
    });
});

describe('Print in in order', () => {
    test('nodes should print in the correct order', () => {
        expect(tree.display(order.in)).toBe('1 2 3 4 6 5 7 ');
    });
});
