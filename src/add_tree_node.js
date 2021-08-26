// Add tree node

export default function addNode(value) {
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
