import { default as createDoublyLinkedNode } from './add_doubly_linked_node';

// Doubly Linked List

export default function DoublyLinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        isEmpty() {
            return this.length == 0;
        },
        insertHead(value) {
            let node = createDoublyLinkedNode(value);

            if (this.head == null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            } else {
                this.head.previous = node;
                node.next = this.head;
                this.head = node;
                this.length++;
                return node;
            }
        },
        insertTail(value) {
            let node = createDoublyLinkedNode(value);

            if (this.tail == null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            } else {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
                this.length++;
                return node;
            }
        },
        insertAt(value, position) {
            let node = createDoublyLinkedNode(value);
            let current = this.head;
            let index = 0;
            let out_of_bounds = 'Index out of bounds';

            if (position < 0 || position > this.length) return out_of_bounds;

            if (position == index) {
                this.insertHead(value);
            } else if (position == this.length) {
                this.insertTail(value);
            } else {
                while (index++ < position) {
                    current = current.next;
                }
                node.previous = current.previous;
                node.next = current;
                current.previous.next = node;
                current.previous = node;
            }
        },
        getItemAt() {},
        removeHead() {},
        removeTail() {},
        removeFrom() {},
        print() {
            let current = this.head;
            let listStr = '';

            while (current) {
                listStr += current.value + (current.next ? ', ' : '');
                current = current.next;
            }

            return listStr;
        }
    };
}
