
export default function createTrieNode(alphabetSize) {
    let endOfWord = false;
    let children = Array(alphabetSize).fill(null);
    return {
        endOfWord,
        children
    };
}