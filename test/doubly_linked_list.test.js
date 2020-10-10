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

    it('Should be able to insert to Tail', () => {
        list.insertTail('D');
        list.insertTail('E');
        list.insertTail('F');

        expect(list.isEmpty()).toBeFalsy();
        expect(list.print()).toMatch('C, B, A, D, E, F');
    });

    it('Should be able to insert to specific position', () => {
        list.insertAt('G', 1);

        expect(list.isEmpty()).toBeFalsy();
        expect(list.print()).toMatch('C, G, B, A, D, E, F');
        expect(list.insertAt('H', -1)).toMatch('Index out of bounds');
    });

    it('Should be able to remove the Head', () => {
        list.removeHead();

        expect(list.isEmpty()).toBeFalsy();
        expect(list.print()).toMatch('G, B, A, D, E, F');
    });
});
