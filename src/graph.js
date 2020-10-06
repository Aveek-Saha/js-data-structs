import { default as createGraphNode } from './add_graph_node';
import { default as Queue } from './queue';

// Graph

export default function Graph(directed = false, weighted = false) {
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