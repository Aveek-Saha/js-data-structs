import { default as createLinkedNode } from './add_linked_node';

// Linked List

export default function LinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        isEmpty() {
            return this.length == 0;
        },
        push(value) {
            let node = createLinkedNode(value);
            if (this.head == null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;
            return node;
        },
        insertAt(index, value) {
            if (index < 0 || index > this.length)
                return null;
            if (index == this.length){
                let temp = this.push(value);
                return temp;
            }
            let node = createLinkedNode(value);
            if(index == 0){
                node.next = this.head;
                this.head = node;
                this.length++;
                return node;
            }
            let curr = this.head;
            let i = 0;
            while (index - 1 != i) {
                curr = curr.next;
                i++;
            }
            node.next = curr.next;
            curr.next = node;
            this.length++;
            return node;
        },
        pop() {
            let node = this.tail;

            if (this.tail == this.head) {
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }

            let curr = this.head;
            while (curr.next != node) {
                curr = curr.next;
            }

            curr.next = null;
            this.tail = curr;
            this.length--;
            return node;
        },
        get(index) {
            if (index < 0 || index >= this.length)
                return null;
            if (index == 0)
                return this.head;

            let curr = this.head;
            let i = 0;
            while (index != i) {
                curr = curr.next;
                i++;
            }
            return curr;
        },
        delete(index) {
            if (index < 0 || index >= this.length)
                return null;
            if (index == 0) {
                let deleted = this.head;
                this.head = this.head.next;
                this.length--;
                return deleted;
            }
            let curr = this.head;
            let i = 0;
            while (index - 1 != i) {
                curr = curr.next;
                i++;
            }
            let del = curr.next;
            if (del == this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            this.length--;
            return del;
        },
        display() {

            let curr = this.head;
            if(curr === null)
                return '';
            let result = '';
            while (curr.next != null) {
                result += curr.value.toString() + ' ➞ ';
                curr = curr.next;
            }
            result += curr.value.toString();
            return result;
        }
    };
}