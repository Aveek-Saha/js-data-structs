var { DoublyLinkedList } = require('../dist/js-data-structs.cjs');

describe('Check Doubly Linked List methods', () => {
    const list = DoublyLinkedList();

    it('Should be able to tell if the list is empty or not', () => {
        expect(list.isEmpty()).toBeTruthy();
        expect(list.print()).toMatch('');
    });

    it('Should be able to insert to Head', () => {
        list.insertHead('A');
        list.insertHead('B');
        list.insertHead('C');

        expect(list.isEmpty()).toBeFalsy();
        expect(list.print()).toMatch('C, B, A');
    });
});
