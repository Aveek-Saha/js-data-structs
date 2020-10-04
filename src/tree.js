// Trees

export function addNode(value) {
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

export function Tree(rootValue) {
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