
<h1 align="center">
JS data structs<br>

</h1>
<h3 align="center">

<img src ="https://img.shields.io/npm/dt/js-data-structs.svg?style=for-the-badge">
<img src ="https://img.shields.io/npm/v/js-data-structs.svg?style=for-the-badge">
<!-- <img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hm/js-data-structs?style=for-the-badge"> -->
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/js-data-structs?style=for-the-badge">
<img alt="Codecov" src="https://img.shields.io/codecov/c/gh/aveek-saha/js-data-structs?style=for-the-badge">
</h3>


A small data structures and algorithms library for JavaScript.

## Installing
### NPM package
`npm i js-data-structs`

[**NPM page**](https://www.npmjs.com/package/js-data-structs)

### CDN
`https://cdn.jsdelivr.net/npm/js-data-structs@latest/dist/js-data-structs.umd.js`

[**jsDeliver**](https://www.jsdelivr.com/package/npm/js-data-structs)

## Implemented Data structures/ Algos-

<details>
<summary>Expand</summary>

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
- Fisher–Yates shuffle Algorithm
- Binary Search
- Rabin Karp
    
</details>

# Contributing
 
Before contributing please read [CONTRIBUTING.md](https://github.com/Aveek-Saha/js-data-structs/blob/master/CONTRIBUTING.md) for guidelines.
 
In addition to the guidelines mentioned in `CONTRIBUTING.md` there are some additional things to keep in mind while raising pull requests. Before your pull request can be accepted there are some checks that have to pass. To run these checks localy-
 
- `npm run prepare` to compile with Rollup and Babel
- `npm run format` to format with Prettier
- `npm run lint` to check for linting errors
- `npm test` to run the Jest unit tests
 
New algorithms or data structures are added to `./src/` and you also have to add test cases for all functions implemented in the `./test/` folder.


### [Usage guide](https://data-structs.netlify.com/guide/trees.html)


# Future features
<details>
<summary>Expand</summary>

- [x] Minified version

- [x] Linked List
    - [ ] Circular Linked List
    - [ ] Doubly Linked List
- [x] Heapsort
    - [x] Max heap
    - [x] Min heap
- [ ] Suffix trees
- [ ] More Graph algorithms
    - [x] Topological Sort
    - [x] Dijkstra's Algorithm
- [x] LZW
    - [x] Encoding
    - [x] Decoding
</details>