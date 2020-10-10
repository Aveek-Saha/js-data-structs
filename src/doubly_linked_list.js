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
        insertTail() {},
        insertAt() {},
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
