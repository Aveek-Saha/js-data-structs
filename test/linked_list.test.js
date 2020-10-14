var { LinkedList } = require('../dist/js-data-structs.cjs');

describe('Check Linked list functions', () => {
    it('should return empty string if list has no elements', () => {

        var list = LinkedList();

        expect(list.display()).toBe('');
        expect(list.isEmpty()).toBe(true);
    });

    it('should return 0 length if list is empty', () => {

        var list = LinkedList();

        expect(list.length).toBe(0);
    });

    it('should add elements to the end of linked list', () => {

        var list = LinkedList();
        var vals = ['0', '1', '2'];

        vals.forEach(val => {
            list.push(val);
        });
        expect(list.display()).toBe('0 ➞ 1 ➞ 2');

        list.push('3');
        expect(list.display()).toBe('0 ➞ 1 ➞ 2 ➞ 3');

    });

    it('should remove element from end of linked list', () => {

        var list = LinkedList();
        var vals = ['0', '1', '2', '3', '4'];

        vals.forEach(val => {
            list.push(val);
        });

        list.pop();
        expect(list.display()).toBe('0 ➞ 1 ➞ 2 ➞ 3');

        var x = list.pop();
        expect(list.display()).toBe('0 ➞ 1 ➞ 2');
        expect(x).toEqual({ value: '3', next: null });
        list.pop();
        list.pop();

        x = list.pop();
        expect(x).toEqual({ value: '0', next: null });

    });

    it('should return the node at the index specified', () => {

        var list = LinkedList();
        var vals = ['0', '1', '2', '3', '4'];

        vals.forEach(val => {
            list.push(val);
        });

        expect(list.get(2)).toEqual({ value: '2', next: { value: '3', next: { value: '4', next: null } } });
    });

    it('should insert the node at the index specified', () => {

        var list = LinkedList();
        var vals = ['0', '1', '2', '3', '4'];

        vals.forEach(val => {
            list.push(val);
        });

        list.pop();
        list.insertAt(2, '7');
        expect(list.display()).toBe('0 ➞ 1 ➞ 7 ➞ 2 ➞ 3');

        list.insertAt(0, '8');
        expect(list.display()).toBe('8 ➞ 0 ➞ 1 ➞ 7 ➞ 2 ➞ 3');
    });

    it('should delete the node at the index specified', () => {

        var list = LinkedList();
        var vals = ['0', '1', '2', '3', '4'];

        vals.forEach(val => {
            list.push(val);
        });

        list.pop();
        list.insertAt(2, '7');
        var x = list.delete(0);
        expect(x.value).toBe('0');
    });


});