var Tree = require('./DataStructures').Tree

var a = Tree('a')
var b = a.root.addChild('b')
var c = a.root.addChild('c')
var d = a.root.addChild('d')
var e = a.root.addChild('e')

var f = b.addChild('f')
var g = b.addChild('g')

var h = c.addChild('h')
var i = g.addChild('i')

console.log(a.display());