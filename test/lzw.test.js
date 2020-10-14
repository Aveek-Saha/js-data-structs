var { LZW } = require('../dist/js-data-structs.cjs');

describe('Check LZW algorithm', () => {
    it('should be able to encode and decode a string', () => {

        let string = 'W#hdppmQccXXurfjxrrrjfjnvQa8%%%%%%%MbJpW%&*mmOJJJJLQ0Omh&%%%%%BBBBBBB%%%%%%8a0CUUYXzYzzzcuxnr/1{{)';
        let lzw = LZW('@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\' ^`.');

        expect(lzw.decode(lzw.encode(string))).toBe(string);

    });

    it('should be able to encode and decode a string if chars is not passed', () => {

        let string = 'W#hdppmQccXXurfjxrrrjfjnvQa8%%%%%%%MbJpW%&*mmOJJJJLQ0Omh&%%%%%BBBBBBB%%%%%%8a0CUUYXzYzzzcuxnr/1{{)';
        let lzw = LZW();

        expect(lzw.decode(lzw.encode(string))).toBe(string);

    });

});
