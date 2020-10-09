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
- Z algorithm (pattern matching)
- N Queens
- LZW
    - Encoding
    - Decoding
-Fisher–Yates shuffle Algorithm
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
    };
}
exports.addNode = addNode;

function Tree(rootValue) {
    let root = addNode(rootValue);

    return {
        root,
        display() {
            var out = '';
            read(root, 0);

            function read(node, indent) {
                out += '   '.repeat(indent) + node.value + ' ➞ \n';

                if (node.children.length) {
                    node.children.forEach(child => {
                        // out += child.value +' '

                        read(child, indent + 1);
                    });
                }

            }
            return out;
        }
    };
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
    };
}
exports.addBinaryNode = addBinaryNode;

let order = {
    pre: 'pre',
    post: 'post',
    in: 'in'
};
exports.order = order;

function BinaryTree(rootValue) {

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
exports.BinaryTree = BinaryTree;


// var tree = BinaryTree('4')

// var a = tree.root.addChild('2')
// var b = tree.root.addChild('5')

// var c = a.addChild('1')
// var d = a.addChild('3')

// var e = b.addChild('6')
// var f = b.addChild('7')

// console.log(tree.display(order.post));

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
    };
}
exports.addBinarySearchNode = addBinarySearchNode;

function BinarySearchTree(rootValue) {
    
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
exports.BinarySearchTree = BinarySearchTree;

// var tree = BinarySearchTree(4)

// var a = tree.root.insert(2)
// var b = tree.root.insert(8)

// var c = a.insert(1)
// var d = a.insert(3)

// var e = b.insert(5)
// var f = b.insert(9)

// console.log(tree.display(order.pre));

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
    };
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
    };
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
    };
}
exports.PriorityQueue = PriorityQueue;

// var q = PriorityQueue()

// q.enqueue('this',4)
// q.enqueue('that',1)
// q.enqueue('here',7)
// q.enqueue('there',3)
// q.enqueue('where',9)
// q.enqueue('near',0)
// q.enqueue('hear',2)

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
    };
}
exports.createGraphNode = createGraphNode;

function Graph(directed = false, weighted = false) {
    let nodes = [];
    let edges = [];

    return {
        directed,
        weighted,
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

            if (!this.directed) {
                node2.addAdjacent(node1);
                edges.push([node2, node1, weight]);
            }
        },
        BFS(startValue) {
            let order = [];
            let startNode = this.getNode(startValue);
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false; });

            visited[startNode.value] = true;
            let q = Queue();
            q.enqueue(startNode);

            while (!q.isEmpty()) {
                let currentNode = q.dequeue();
                order.push(currentNode.value);

                currentNode.adjacentNodes.forEach(node => {
                    if (!visited[node.value]) {
                        q.enqueue(node);
                        visited[node.value] = true;
                    }
                });
            }
            return order;
        },
        DFS(startValue) {
            let order = [];
            let startNode = this.getNode(startValue);
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false; });

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
        fromAdjMatrix(matrix) {
            if (matrix.length != matrix[0].length)
                return null;
            for (let i = 0; i < matrix.length; i++) {
                if (!directed) {
                    for (let j = i + 1; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0) {
                            if (!this.weighted)
                                this.addEdge(i, j);
                            else
                                this.addEdge(i, j, matrix[i][j]);
                        }
                    }
                }
                else {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0) {
                            if (!this.weighted)
                                this.addEdge(i, j);
                            else
                                this.addEdge(i, j, matrix[i][j]);
                        }
                    }
                }
            }
        },
        topologicalSort() {
            if (!this.directed)
                return 'Toplogical sort can only be done on Directed Acyclic Graphs';
            let order = [];
            let visited = {};
            nodes.forEach(node => { visited[node.value] = false; });

            nodes.forEach(node => {
                if (!visited[node.value])
                    topSort(node);
            });
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
            let distance = {};
            let set = {};
            nodes.forEach(node => {
                distance[node.value] = Number.MAX_SAFE_INTEGER;
                set[node.value] = false;
            });
            console.log(edges.length);

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
            });
        }
    };
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

// var g = Graph(false, true)
// g.addEdge(0, 1, 4)
// g.addEdge(0, 7, 8)
// g.addEdge(1, 2, 8)
// g.addEdge(1, 7, 11)
// g.addEdge(2, 3, 7)
// g.addEdge(2, 8, 2)
// g.addEdge(2, 5, 4)
// g.addEdge(3, 4, 9)
// g.addEdge(3, 5, 14)
// g.addEdge(4, 5, 10)
// g.addEdge(5, 6, 2)
// g.addEdge(6, 7, 1)
// g.addEdge(6, 8, 6)
// g.addEdge(7, 8, 7)

// g.fromAdjMatrix(matrix)
// console.log(g.dijkstra(0));

// Trie

let alphabetSize = 26;

function createTrieNode() {
    let endOfWord = false;
    let children = Array(alphabetSize).fill(null);
    return {
        endOfWord,
        children
    };
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
                let index = value.charCodeAt(level) - 'a'.charCodeAt(0);

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
                let index = value.charCodeAt(level) - 'a'.charCodeAt(0);

                if (temp.children[index] === null)
                    return false;
                temp = temp.children[index];
            }
            return (temp !== null && temp.endOfWord);
        }
    };
}
exports.Trie = Trie;

// var tr = Trie()

// var list = ['the', 'a', 'there', 'answer', 'any','by', 'bye', 'their']
// list.forEach(word => {
//     tr.insertWord(word)
// })

// console.log(tr.search('these'))

// Powerset

function powerSet(array, index = 0, curr = '') {
    let result = [];
    let len = array.length;

    powSet(index, curr);
    function powSet(index = 0, curr = '') {

        // Base case
        if (index == len) {
            result.push(curr.split(''));
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
    let result = '';
    let output = [];
    heaps_algorithm(array, n);
    function heaps_algorithm(arr, n) {
        if (n == 1) {
            result += arr.join('') + ' ';
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
    let temp = result.split(' ');
    let final = temp.slice(0, temp.length - 1);
    final.forEach(ele => {
        output.push(ele.split(''));
    });
    return output;
}
exports.permutations = permutations;

// var perm_arr = [];
// for (let i = 1; i <= 7; i++) {
//     perm_arr.push(i);
// }
// console.log(permutations(perm_arr).length);

// Linked List

function createLinkedNode(value) {
    return {
        value,
        next: null
    };
}
exports.createLinkedNode = createLinkedNode;

function LinkedList() {
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
exports.LinkedList = LinkedList;

// var list = LinkedList()
// var vals = ['0', '1', '2', '3', '4', '5', '6']

// vals.forEach(val => {
//     list.push(val)
// })
// list.pop()
// list.insertAt(2, '7')
// var x = list.delete(0)
// console.log(list.display());
// console.log(x);

// Heap Sort

function heapify(array, n, i) {
    let largest = i;
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

// An array of objects with a key property must be passed. eg- {key: 8, value: 'n', ...}

// var arr = [
//     { key: 4, data: 'a' }, 
//     { key: 1, data: 'b' }, 
//     { key: 3, data: 'c' }, 
//     { key: 5, data: 'd' }, 
//     { key: 2, data: 'e' }
// ]
// HeapSort(arr, true)

// console.log(arr);

// Z algorithm

function zSearch(text, pattern) {
    let str = pattern + '$' + text;
    let len = str.length;
    let patLen = pattern.length;
    let result = [];

    let z = createZarray(str);

    for (let i = 0; i < len; i++) {
        if (z[i] == patLen)
            result.push(i - patLen - 1);
    }

    function createZarray(string) {
        let n = string.length;
        let arr = Array(n);
        arr[0] = 0;
        let l = 0, r = 0;

        for (let i = 1; i < n; i++) {
            if (i > r) {
                l = i;
                r = i;
                while (r < n && string[r - l] == string[r]) {
                    r++;
                }
                arr[i] = r - l;
                r--;
            }
            else {
                let k = i - l;
                if (arr[k] < r - i + 1)
                    arr[i] = arr[k];

                else {
                    l = i;
                    while (r < n && string[r - l] == string[r]) {
                        r++;
                    }
                    arr[i] = r - l;
                    r--;
                }
            }
        }
        return arr;
    }
    return result;
}
exports.zSearch = zSearch;

// var text = 'aabcaabxaaaz';

// console.log(zSearch(text, 'ab'));

// N Queens

function Nqueens(n) {

    let board = Array.from(Array(n), () => Array.from(Array(n), () => 0));

    solve(0);
    function isSafe(row, col) {
        for (let i = 0; i < col; i++) {
            if (board[row][i] == 1)
                return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i-- , j--) {
            if (board[i][j] == 1)
                return false;
        }
        for (let i = row, j = col; j >= 0 && i < n; i++ , j--) {
            if (board[i][j] == 1)
                return false;
        }
        return true;
    }

    function solve(col) {
        if (col >= n)
            return true;

        for (let i = 0; i < n; i++) {
            if (isSafe(i, col)) {
                board[i][col] = 1;
                if (solve(col + 1))
                    return true;

                board[i][col] = 0;
            }
        }
        return false;
    }
    return board;
}
exports.Nqueens = Nqueens;

// console.log(Nqueens(5));

// LZW compression

function LZW(chars = null) {

    let allChars;
    if (!chars) {
        allChars = Array.apply(null, Array(127 - 32))
            .map(function (x, i) {
                return String.fromCharCode(i + 32);
            }).join('');
    } else {
        allChars = chars;
    }

    return {
        encode(string) {
            let dict = {};
            let code = 0;

            allChars.split('').forEach(char => {
                dict[char] = code;
                code += 1;
            });
            let data = string.split('');
            let s = data[0];
            let output = [];
            let ch;

            for (let i = 1; i < data.length; i++) {
                ch = data[i];
                if (dict[s + ch] != null) {
                    s = s + ch;
                } else {
                    output.push(dict[s]);
                    dict[s + ch] = code;
                    code += 1;
                    s = ch;
                }
            }
            output.push(dict[s]);
            return output;
        },
        decode(encoded) {
            let dict = {};
            let code = 0;
            allChars.split('').forEach(char => {
                dict[code] = char;
                code += 1;
            });

            let old = encoded[0];
            let string = dict[old];
            let next;
            let s, c = string[0];

            for (let i = 1; i < encoded.length; i++) {
                next = encoded[i];
                if (dict[next] == null) {
                    s = dict[old];
                    s += c;
                } else {
                    s = dict[next];
                }
                string += s;
                c = s[0];
                dict[code] = dict[old] + c;
                code += 1;
                old = next;
            }
            return string;
        }
    };
    
}
exports.LZW = LZW;

// let string = 'W#hdppmQccXXurfjxrrrjfjnvQa8%%%%%%%MbJpW%&*mmOJJJJLQ0Omh&%%%%%BBBBBBB%%%%%%8a0CUUYXzYzzzcuxnr/1{{)'

// let lzw = LZW('@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\' ^`'.')
// console.log('Original length:', string.length);
// console.log('Encoded length:', lzw.encode(string).length);

// console.log(lzw.decode(lzw.encode(string)) == string);


// Fisher-Yates

function fisherYates(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(fisherYates(arr))

exports.fisherYates = fisherYates;


// Binary search

function BinarySearch(arr, l, r, key) {
    if(r >= l){
        var mid = l + parseInt((r - l)/2);

        if(arr[mid] == key)
            return mid;
        
        else if(arr[mid] > key)
            return BinarySearch(arr, l, mid-1, key); 
        
        else
            return BinarySearch(arr, mid+1, r, key); 
    }

    else
        return -1;
}

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(BinarySearch(arr, 0, arr.length, 6))

exports.BinarySearch = BinarySearch;

// Rabin Karp

function RabinKarp(pattern, text, prime, num_chars) {
    var m = pattern.length;
    var n = text.length;
    var j = 0;
    var p = 0;
    var t = 0;
    var h = 1;
    var ind = [];

    for (let i = 0; i < m-1; i++)
        h = (h * num_chars) % prime;    

    for (let i = 0; i < m; i++) {
        p = (num_chars * p + pattern[i].charCodeAt(0)) % prime; 
        t = (num_chars * t + text[i].charCodeAt(0)) % prime; 
    }


    for (let i = 0; i <= n-m; i++) {
        if (p==t) {
            for (j = 0; j < m; j++) {
                if (text[i+j].charCodeAt(0) != pattern[j].charCodeAt(0)) 
                    break;
            }

            if (j == m)
                ind.push(i);
        }

        if ( i < n-m ) 
        { 
            t = (num_chars*(t - text[i].charCodeAt(0)*h) + text[i+m].charCodeAt(0)) % prime; 
            if (t < 0) 
                t = (t + prime); 
        } 
    }
    return ind;
}


// var text = 'AABAACAADAABAABA'
// var pattern = 'AABA'

// console.log(RabinKarp(pattern, text, 101, 256))

exports.RabinKarp = RabinKarp;