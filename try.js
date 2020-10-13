var { LZW } = require('./dist/js-data-structs.cjs');

let string = 'W#hdppmQccXXurfjxrrrjfjnvQa8%%%%%%%MbJpW%&*mmOJJJJLQ0Omh&%%%%%BBBBBBB%%%%%%8a0CUUYXzYzzzcuxnr/1{{)';

let lzw = LZW('@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\' ^`.');
console.log('Original length:', string.length);
console.log('Encoded length:', lzw.encode(string).length);

console.log(lzw.decode(lzw.encode(string)) == string);