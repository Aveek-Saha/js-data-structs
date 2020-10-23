var { BinarySearchTree, order } = require('../dist/js-data-structs.cjs');

describe('Check if nodes are printing in the correct order', () => {
    var tree = BinarySearchTree(4);
    var a = tree.root.insert(2);
    var b = tree.root.insert(8);

    a.insert(1);
    a.insert(3);
    b.insert(5);
    b.insert(9);

    it('should print nodes in post order', () => {
        expect(tree.display(order.post)).toBe('1 3 2 5 9 8 4 ');
    });

    it('should print nodes in pre order', () => {
        expect(tree.display(order.pre)).toBe('4 1 3 2 5 9 8 ');
    });

    it('should print nodes in order', () => {
        expect(tree.display(order.in)).toBe('1 2 3 4 5 8 9 ');
    });

    it('should return the node searched for', () => {
        expect(tree.search(5).value).toBe(5);
    });

    it('should return -1 if node does not exist', () => {
        expect(tree.search(10)).toBe(-1);
    });
});
