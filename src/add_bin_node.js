
export default function addBinaryNode(value) {
    return {
        value,
        left: null,
        right: null,
        addChild(childValue) {
            let childNode = addBinaryNode(childValue);

            if (this.left === null)
                this.left = childNode;
            else
                this.right = childNode;
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
