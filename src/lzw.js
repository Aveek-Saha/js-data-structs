// LZW compression

export default function LZW(chars = null) {

    let allChars;
    if (!chars) {
        allChars = Array.apply(null, Array(127 - 32))
            .map(function (x, i) {
                return String.fromCharCode(i + 32);
            }).join('');
    } else {
        allChars = chars;
    }

    return {
        encode(string) {
            let dict = {};
            let code = 0;

            allChars.split('').forEach(char => {
                dict[char] = code;
                code += 1;
            });
            let data = string.split('');
            let s = data[0];
            let output = [];
            let ch;

            for (let i = 1; i < data.length; i++) {
                ch = data[i];
                if (dict[s + ch] != null) {
                    s = s + ch;
                } else {
                    output.push(dict[s]);
                    dict[s + ch] = code;
                    code += 1;
                    s = ch;
                }
            }
            output.push(dict[s]);
            return output;
        },
        decode(encoded) {
            let dict = {};
            let code = 0;
            allChars.split('').forEach(char => {
                dict[code] = char;
                code += 1;
            });

            let old = encoded[0];
            let string = dict[old];
            let next;
            let s, c = string[0];

            for (let i = 1; i < encoded.length; i++) {
                next = encoded[i];
                if (dict[next] == null) {
                    s = dict[old];
                    s += c;
                } else {
                    s = dict[next];
                }
                string += s;
                c = s[0];
                dict[code] = dict[old] + c;
                code += 1;
                old = next;
            }
            return string;
        }
    };
    
}