import { alphabetSize } from './constants';
import { default as createTrieNode } from './add_trie_node';


export default function Trie() {
    let root = createTrieNode(alphabetSize);

    return {
        root,
        insertWord(value) {
            let len = value.length;
            let temp = root;

            for (let level = 0; level < len; level++) {
                let index = value.charCodeAt(level) - 'a'.charCodeAt(0);

                if (temp.children[index] === null)
                    temp.children[index] = createTrieNode(alphabetSize);
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