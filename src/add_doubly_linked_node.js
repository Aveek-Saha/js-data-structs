export default function createDoublyLinkedNode(value) {
    return {
        value,
        next: null,
        previous: null
    };
}
