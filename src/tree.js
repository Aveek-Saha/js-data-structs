import { default as addNode } from './add_tree_node';

// Trees

export default function Tree(rootValue) {
    let root = addNode(rootValue);

    return {
        root,
        display() {
            var out = '';
            read(root, 0);

            function read(node, indent) {
                // out += '   '.repeat(indent) + node.value + ' ➞ \n';
                out += node.value + ' ';

                if (node.children.length) {
                    node.children.forEach((child) => {
                        // out += child.value +" "

                        read(child, indent + 1);
                    });
                }
            }
            return out;
        }
    };
}
