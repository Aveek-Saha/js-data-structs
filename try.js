var BinaryTree = require('./dist/js-data-structs.cjs').BinaryTree;
var order = require('./dist/js-data-structs.cjs').order;

var tree = BinaryTree('4');

var a = tree.root.addChild('2');
var b = tree.root.addChild('5');

var c = a.addChild('1');
var d = a.addChild('3');

var e = b.addChild('6');
var f = b.addChild('7');

console.log(tree.display(order.pre));