/*

Implemented Data structures/ Algos
- Trees
    - Binary Trees
    - Binary Search Trees
- Stack
- Queue
    - Priority Queue
- Graph
    - BFS
    - DFS
    - Topological Sort
    - Dijkstra's Algorithm
- Trie
- Power set
- Heap's algorithm (array permutations)
- Linked List
- Heap Sort
    - Max heap
    - Min heap
*/


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
exports.addNode = addNode;

function Tree(rootValue) {
    let root = addNode(rootValue);

    return {
        root,
        display() {
            var out = "";
            read(root, 0);

            function read(node, indent) {
                out += "   ".repeat(indent) + node.value + " => \n";

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
exports.Tree = Tree;

// var a = Tree('a')
// var b = a.root.addChild('b')
// var c = a.root.addChild('c')
// var d = a.root.addChild('d')
// var e = a.root.addChild('e')

// var f = b.addChild('f')
// var g = b.addChild('g')

// var h = c.addChild('h')
// var i = g.addChild('i')

// console.log(a.display());

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
exports.addBinaryNode = addBinaryNode;

function BinaryTree(rootValue) {

    let root = addBinaryNode(rootValue);
    return {
        root,
        display() {
            inOrder(root);
            function inOrder(node) {
                if (node != null) {
                    inOrder(node.left);
                    console.log(node.value + " ");
                    inOrder(node.right);
                }
                else
                    return;
            }
        },
    }
}
exports.BinaryTree = BinaryTree;


// var tree = BinaryTree("4")

// var a = tree.root.addChild("2")
// var b = tree.root.addChild("5")

// var c = a.addChild("1")
// var d = a.addChild("3")

// var e = b.addChild("6")
// var f = b.addChild("7")

// tree.display()

// Binary Search Trees

function addBinarySearchNode(value) {
    return {
        value,
        left: null,
        right: null,
        insert(childValue) {
            let childNode = addBinarySearchNode(childValue)

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
exports.addBinarySearchNode = addBinarySearchNode;


function BinarySearchTree(rootValue) {

    let root = addBinarySearchNode(rootValue);
    return {
        root,
        display() {
            postOrder(root);
            function inOrder(node) {
                if (node != null) {
                    inOrder(node.left);
                    console.log(node.value + " ");
                    inOrder(node.right);
                }
                else
                    return;
            }

            function postOrder(node) {
                if (node != null) {
                    postOrder(node.left);
                    postOrder(node.right);
                    console.log(node.value + " ");
                }
                else
                    return;
            }
        },
        search(value) {
            look(root)
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
exports.BinarySearchTree = BinarySearchTree;

// var tree = BinarySearchTree(4)

// var a = tree.root.insert(2)
// var b = tree.root.insert(8)

// var c = a.insert(1)
// var d = a.insert(3)

// var e = b.insert(5)
// var f = b.insert(9)

// tree.display()

// console.log(tree.root);

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
exports.Stack = Stack;

// var stk = Stack()
// stk.push(1)
// stk.push(2)
// stk.push(3)
// stk.push(5)
// stk.push(9)

// var x = stk.pop()
// x = stk.pop()


// console.log(stk.peek());


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
exports.Queue = Queue;

// var q = Queue()

// q.enqueue(4)
// q.enqueue(1)
// q.enqueue(7)
// q.enqueue(3)
// q.enqueue(9)
// q.enqueue(0)
// q.enqueue(2)

// q.dequeue()
// q.dequeue()
// q.dequeue()
// console.log(q.peek());

// Priority Queue

function PriorityQueue() {
    let queue = [];
    return {
        queue,
        enqueue(value, priority) {
            queue.push({ value, priority })
            queue.sort(function (a, b) {
                return a.priority - b.priority;
            });
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
exports.PriorityQueue = PriorityQueue;

// var q = PriorityQueue()

// q.enqueue("this",4)
// q.enqueue("that",1)
// q.enqueue("here",7)
// q.enqueue("there",3)
// q.enqueue("where",9)
// q.enqueue("near",0)
// q.enqueue("hear",2)

// q.dequeue()
// q.dequeue()
// q.dequeue()

// console.log(q);

// Graph

function createGraphNode(value) {
    let adjacentNodes = [];
    return {
        value,
        adjacentNodes,
        addAdjacent(node) {
            adjacentNodes.push(node);
        }
    }
}
exports.createGraphNode = createGraphNode;

function Graph(directed = false) {
    let nodes = [];
    let edges = [];

    return {
        directed,
        nodes,
        edges,
        addNode(value) {
            nodes.push(createGraphNode(value));
        },
        getNode(value) {
            return nodes.find(node => node.value === value);
        },
        addEdge(value1, value2, weight = 1) {
            if (this.getNode(value1) === undefined)
                this.addNode(value1);
            if (this.getNode(value2) === undefined)
                this.addNode(value2);
            let node1 = this.getNode(value1);
            let node2 = this.getNode(value2);
            // console.log(this);


            node1.addAdjacent(node2);
            edges.push([node1, node2, weight]);

            if (!directed)
                node2.addAdjacent(node1);
        },
        BFS(startValue) {
            let order = [];
            let startNode = this.getNode(startValue);
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false });

            let q = Queue();
            q.enqueue(startNode);

            while (!q.isEmpty()) {
                let currentNode = q.dequeue()
                visited[currentNode.value] = true
                order.push(currentNode.value);

                currentNode.adjacentNodes.forEach(node => {
                    if (!visited[node.value])
                        q.enqueue(node);
                });
            }
            return order;
        },
        DFS(startValue) {
            let order = [];
            let startNode = this.getNode(startValue);
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false });

            visit(startNode, visited);
            function visit(currnode, visited) {
                visited[currnode.value] = true;
                order.push(currnode.value);
                currnode.adjacentNodes.forEach(node => {
                    if (!visited[node.value])
                        visit(node, visited);
                });
            }
            return order;
        },
        fromAdjMatrix(matrix, directed = false, weighted = false) {
            if (matrix.length != matrix[0].length)
                return null;
            for (let i = 0; i < matrix.length; i++) {
                if (!directed) {
                    for (let j = i + 1; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0){
                            if(!weighted)
                                this.addEdge(i, j);
                            else
                                this.addEdge(i, j, matrix[i][j]);
                        }
                    }
                }
                else {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0){
                            if (!weighted)
                                this.addEdge(i, j);
                            else
                                this.addEdge(i, j, matrix[i][j]);
                        }
                    }
                }
            }
        },
        topologicalSort() {
            if (!directed)
                return "Toplogical sort can only be done on Directed Acyclic Graphs";
            let order = [];
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false });

            nodes.forEach(node => {
                if (!visited[node.value])
                    topSort(node);
            })
            function topSort(currnode) {

                visited[currnode.value] = true;

                currnode.adjacentNodes.forEach(node => {
                    if (!visited[node.value])
                        topSort(node);
                });
                order.push(currnode.value);
            }
            return order.reverse();
        },
        dijkstra(start) {
            let n = nodes.length;
            let distance = [];
            let set = [];
            nodes.forEach(node => {
                distance[node.value] = Number.MAX_SAFE_INTEGER ;
                set[node.value] = false;
            });

            distance[this.getNode(start).value] = 0;

            for (let i = 0; i < n; i++) {
                let u = minDistance(distance, set);
                set[u.value] = true;

                nodes.forEach(node => {
                    let w = 0;
                    for (const edge of edges) {
                        if ((edge[0].value == u.value && edge[1].value == node.value) || 
                            (edge[1].value == u.value && edge[2].value == node.value)) {
                            w = edge[2];
                            break;
                        }
                    }
                    if (!set[node.value] && w != 0 && distance[u.value] != Number.MAX_SAFE_INTEGER &&
                        distance[u.value] + w < distance[node.value])
                        distance[node.value] = distance[u.value] + w;
                });
            }
            return distance;

            function minDistance(dist, set) {
                let minDis = Number.MAX_SAFE_INTEGER;
                let minIndex = -1;

                nodes.forEach(node => {
                    if (set[node.value] == false && dist[node.value] <= minDis) {
                        minDis = dist[node.value];
                        minIndex = node;
                    }
                });
                return minIndex;
            }
        },
        findEdgeWeight(u, v) {
            edges.forEach(edge => {
                if ((edge[0].value == u && edge[1].value == v) || (edge[1].value == u && edge[2].value == v))
                    return edge[2];
            })
        }
    }
}
exports.Graph = Graph;

// var matrix = [
//     [0, 4, 0, 0, 0, 0, 0, 8, 0],
//     [4, 0, 8, 0, 0, 0, 0, 11, 0],
//     [0, 8, 0, 7, 0, 4, 0, 0, 2],
//     [0, 0, 7, 0, 9, 14, 0, 0, 0],
//     [0, 0, 0, 9, 0, 10, 0, 0, 0],
//     [0, 0, 4, 14, 10, 0, 2, 0, 0],
//     [0, 0, 0, 0, 0, 2, 0, 1, 6],
//     [8, 11, 0, 0, 0, 0, 1, 0, 7],
//     [0, 0, 2, 0, 0, 0, 6, 7, 0]
// ]

// var matrix = [
//     [0, 1, 0, 0, 1],
//     [1, 0, 1, 1, 1],
//     [0, 1, 0, 1, 0],
//     [0, 1, 1, 0, 1],
//     [1, 1, 0, 1, 0],
// ]
// var g = Graph()
// g.addEdge("A", "C");
// g.addEdge("A", "B");
// g.addEdge("A", "D");
// g.addEdge("C", "D");
// g.addEdge("D", "E");
// g.addEdge("E", "F");
// g.addEdge("B", "G"); 

// g.fromAdjMatrix(matrix, false, true)
// console.log(g.DFS("A"));

// Trie

let alphabetSize = 26;

function createTrieNode() {
    let endOfWord = false;
    let children = Array(alphabetSize).fill(null);
    return {
        endOfWord,
        children
    }
}
exports.createTrieNode = createTrieNode;


function Trie() {
    let root = createTrieNode();

    return {
        root,
        insertWord(value) {
            let len = value.length;
            let temp = root;

            for (let level = 0; level < len; level++) {
                let index = value.charCodeAt(level) - "a".charCodeAt(0);

                if (temp.children[index] === null)
                    temp.children[index] = createTrieNode();
                temp = temp.children[index];
            }

            temp.endOfWord = true;
        },
        search(value) {
            let len = value.length;
            let temp = root;

            for (let level = 0; level < len; level++) {
                let index = value.charCodeAt(level) - "a".charCodeAt(0);

                if (temp.children[index] === null)
                    return false;
                temp = temp.children[index];
            }
            return (temp !== null && temp.endOfWord);
        }
    }
}
exports.Trie = Trie;

// var tr = Trie()

// var list = ["the", "a", "there", "answer", "any","by", "bye", "their"]
// list.forEach(word => {
//     tr.insertWord(word)
// })

// console.log(tr.search("these"))

// Powerset

function powerSet(array, index = 0, curr = "") {
    let result = [];
    let len = array.length;

    powSet(index = 0, curr = "");
    function powSet(index = 0, curr = "") {

        // Base case
        if (index == len) {
            result.push(curr.split(""));
            return;
        }
        powSet(index + 1, curr + array[index]);
        powSet(index + 1, curr);
    }
    return result;
}
exports.powerSet = powerSet;


// console.log(powerSet([1,2,3]));

// Generate permutations

function permutations(array) {

    let n = array.length;
    let result = "";
    let output = [];
    heaps_algorithm(array, n);
    function heaps_algorithm(arr, n) {
        if (n == 1) {
            result += arr.join("") + " ";
            return;
        }

        for (let i = 0; i < n; i++) {
            heaps_algorithm(arr, n - 1);
            if (n % 2 == 0) {
                let x = array[i];
                array[i] = array[n - 1];
                array[n - 1] = x;
            }
            else {
                let x = array[0];
                array[0] = array[n - 1];
                array[n - 1] = x;
            }
        }
    }
    let temp = result.split(" ");
    let final = temp.slice(0, temp.length - 1);
    final.forEach(ele => {
        output.push(ele.split(""));
    });
    return output;
}
exports.permutations = permutations;

// var perm_arr = [];
// for (let i = 1; i <= 7; i++) {
//     perm_arr.push(i);
// }
// console.log(permutations(perm_arr).length);

function createNode(value) {
    return {
        value,
        next: null
    }
}
exports.createNode = createNode;

function LinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        isEmpty() {
            return this.length == 0;
        },
        push(value) {
            let node = createNode(value);
            if (this.head == null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;
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
            return curr
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
            let result = "";
            while (curr.next != null) {
                result += curr.value.toString() + " ➞ ";
                curr = curr.next;
            }
            result += curr.value.toString();
            return result;
        }
    }
}
exports.LinkedList = LinkedList;

// var list = LinkedList()
// var vals = ['0', '1', '2', '3', '4', '5', '6']

// vals.forEach(val => {
//     list.push(val)
// })
// list.pop()
// list.push("7")
// var x = list.delete(2)
// console.log(list.display());
// console.log(x);

// Heap Sort

function heapify(array, n, i) {
    let largest = i
    let l = 2 * i + 1; // left child
    let r = 2 * i + 2; // right child

    if (r < n && array[i].key < array[r].key)
        largest = r;
    if (l < n && array[largest].key < array[l].key)
        largest = l;
    if (largest != i) {
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        heapify(array, n, largest);
    }
}
exports.heapify = heapify;

function heapifyMin(array, n, i) {
    let smallest = i;
    let l = 2 * i + 1; // left child
    let r = 2 * i + 2; // right child

    if (r < n && array[i].key > array[r].key)
        smallest = r;
    if (l < n && array[smallest].key > array[l].key)
        smallest = l;
    if (smallest != i) {
        var temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
        heapifyMin(array, n, smallest);
    }
}
exports.heapifyMin = heapifyMin;

function HeapSort(array, min = false) {
    let n = array.length;
    for (let i = parseInt(n / 2 - 1); i > -1; i--) {
        if (!min)
            heapify(array, n, i);
        else
            heapifyMin(array, n, i);
    }

    for (let j = n - 1; j > 0; j--) {
        let temp = array[j];
        array[j] = array[0];
        array[0] = temp;
        if (!min)
            heapify(array, j, 0);
        else
            heapifyMin(array, j, 0);
    }
}
exports.HeapSort = HeapSort;

// An array of objects with a key property must be passed. eg- {key: 8, value: "n", ...}

// var arr = [
//     { key: 4, data: "a" }, 
//     { key: 1, data: "b" }, 
//     { key: 3, data: "c" }, 
//     { key: 5, data: "d" }, 
//     { key: 2, data: "e" }
// ]
// HeapSort(arr, true)

// console.log(arr);

