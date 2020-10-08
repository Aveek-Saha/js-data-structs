import { default as addBinaryNode } from './add_bin_node';

// Binary Trees

export default function BinaryTree(rootValue) {

    let root = addBinaryNode(rootValue);
    return {
        root,
        display(order) {
            let result = '';
            if (order == 'post') {
                postOrder(root);
            } else if (order == 'pre') {
                preOrder(root);
            } else {
                inOrder(root);
            }
            function inOrder(node) {
                if (node != null) {
                    inOrder(node.left);
                    result += node.value + ' ';
                    inOrder(node.right);
                }
                else
                    return;
            }
            function postOrder(node) {
                if (node != null) {
                    postOrder(node.left);
                    postOrder(node.right);
                    result += node.value + ' ';
                }
                else
                    return;
            }
            function preOrder(node) {
                if (node != null) {
                    result += node.value + ' ';
                    postOrder(node.left);
                    postOrder(node.right);
                }
                else
                    return;
            }
            return result;
        },
    };
}