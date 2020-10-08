export default function addBinaryNode(value) {
    return {
        value,
        left: null,
        right: null,
        addChild(childValue) {
            let childNode;

            if (this.left === null) childNode = this.addLeftChild(childValue);
            else childNode = this.addRightChild(childValue);
            return childNode;
        },
        addLeftChild(childValue) {
            let childNode = addBinaryNode(childValue);
            this.left = childNode;
            return childNode;
        },
        addRightChild(childValue) {
            let childNode = addBinaryNode(childValue);
            this.right = childNode;
            return childNode;
        }
    };
}
