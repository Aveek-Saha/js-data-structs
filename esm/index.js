// Trees

function addNode(value) {
    let children = [];

    return {
        value,
        children,

        addChild(childValue) {
            let child = addNode(childValue);
            children.push(child);
            return child;
        }
    }
}

function Tree(rootValue) {
    let root = addNode(rootValue);

    return {
        root,
        display() {
            var out = "";
            read(root, 0);

            function read(node, indent) {
                out += "   ".repeat(indent) + node.value + " ➞ \n";

                if (node.children.length) {
                    node.children.forEach(child => {
                        // out += child.value +" "

                        read(child, indent + 1);
                    });
                }

            }
            return out;
        }
    }
}

// Binary Trees

function addBinaryNode(value) {
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
    }
}

const order = {
    pre: "pre",
    post: "post",
    in: "in"
};

function BinaryTree(rootValue) {

    let root = addBinaryNode(rootValue);
    return {
        root,
        display(order) {
            let result = "";
            if (order == "post") {
                postOrder(root);
            } else if (order == "pre") {
                preOrder(root);
            } else {
                inOrder(root);
            }
            function inOrder(node) {
                if (node != null) {
                    inOrder(node.left);
                    result += node.value + " ";
                    inOrder(node.right);
                }
                else
                    return;
            }
            function postOrder(node) {
                if (node != null) {
                    postOrder(node.left);
                    postOrder(node.right);
                    result += node.value + " ";
                }
                else
                    return;
            }
            function preOrder(node) {
                if (node != null) {
                    result += node.value + " ";
                    postOrder(node.left);
                    postOrder(node.right);
                }
                else
                    return;
            }
            return result;
        },
    }
}

// Binary Search Trees

function addBinarySearchNode(value) {
    return {
        value,
        left: null,
        right: null,
        insert(childValue) {
            let childNode = addBinarySearchNode(childValue);

            traverse(this, childNode);
            function traverse(node, childNode) {
                if (node == null)
                    return childNode;
                // console.log(node.value);

                if (childValue > node.value)
                    node.right = traverse(node.right, childNode);
                else
                    node.left = traverse(node.left, childNode);

                return node;
            }
            return childNode;
        }
    }
}

function BinarySearchTree(rootValue) {
    
    let root = addBinarySearchNode(rootValue);
    return {
        root,
        display(order) {
            let result = "";
            if (order == "post") {
                postOrder(root);
            } else if (order == "pre") {
                preOrder(root);                
            } else {
                inOrder(root);
            }
            function inOrder(node) {
                if (node != null) {
                    inOrder(node.left);
                    result += node.value + " ";
                    inOrder(node.right);
                }
                else
                    return;
            }
            function postOrder(node) {
                if (node != null) {
                    postOrder(node.left);
                    postOrder(node.right);
                    result += node.value + " ";
                }
                else
                    return;
            }
            function preOrder(node) {
                if (node != null) {
                    result += node.value + " ";
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

            return -1
        }
    }
}

// Stack

function Stack() {
    let stack = [];
    return {
        stack,
        push(value) {
            stack.push(value);
        },
        pop() {
            return stack.pop();
        },
        peek() {
            return stack[stack.length - 1];
        },
        isEmpty() {
            return stack.length != 0 ? false : true;
        }
    }
}

// Queue

function Queue() {
    let queue = [];
    return {
        queue,
        enqueue(value) {
            queue.push(value);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0];
        },
        isEmpty() {
            return queue.length != 0 ? false : true;
        }
    }
}

// Priority Queue

function PriorityQueue() {
    let queue = [];
    return {
        queue,
        enqueue(value, key) {
            queue.push({ value, key });
            HeapSort(queue);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0].value;
        },
        isEmpty() {
            return queue.length != 0 ? false : true;
        }
    }
}

export { BinarySearchTree, BinaryTree, PriorityQueue, Queue, Stack, Tree, addBinaryNode, addBinarySearchNode, addNode, order };
