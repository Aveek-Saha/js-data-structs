export default function createGraphNode(value) {
    let adjacentNodes = [];
    return {
        value,
        adjacentNodes,
        addAdjacent(node) {
            adjacentNodes.push(node);
        }
    };
}