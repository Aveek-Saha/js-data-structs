var { RabinKarp } = require('./dist/js-data-structs.cjs');

var text = 'AABAACAADAABAABA';
var pattern = 'AABA';

console.log(RabinKarp(pattern, text, 101, 256));