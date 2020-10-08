import { default as addBinarySearchNode } from './add_bst_node';

// Binary Search Trees

export default function BinarySearchTree(rootValue) {
    
    let root = addBinarySearchNode(rootValue);
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
        search(value) {
            look(root);
            function look(node) {

                if (value > node.value)
                    look(node.right);
                else if (value == node.value)
                    return node;
                else
                    look(node.left);
            }

            return -1;
        }
    };
}