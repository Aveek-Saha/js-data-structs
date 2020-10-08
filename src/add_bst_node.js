export default function addBinarySearchNode(value) {
    return {
        value,
        left: null,
        right: null,
        insert(childValue) {
            let childNode = addBinarySearchNode(childValue);

            traverse(this, childNode);
            function traverse(node, childNode) {
                if (node == null) return childNode;
                // console.log(node.value);

                if (childValue > node.value)
                    node.right = traverse(node.right, childNode);
                else node.left = traverse(node.left, childNode);

                return node;
            }
            return childNode;
        }
    };
}
