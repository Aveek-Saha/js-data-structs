// Z algorithm

export default function ZSearch(text, pattern) {
    let str = pattern + '$' + text;
    let len = str.length;
    let patLen = pattern.length;
    let result = [];

    let z = createZarray(str);

    for (let i = 0; i < len; i++) {
        if (z[i] == patLen) result.push(i - patLen - 1);
    }

    function createZarray(string) {
        let n = string.length;
        let arr = Array(n);
        arr[0] = 0;
        let l = 0,
            r = 0;

        for (let i = 1; i < n; i++) {
            if (i > r) {
                l = i;
                r = i;
                while (r < n && string[r - l] == string[r]) {
                    r++;
                }
                arr[i] = r - l;
                r--;
            } else {
                let k = i - l;
                if (arr[k] < r - i + 1) arr[i] = arr[k];
                else {
                    l = i;
                    while (r < n && string[r - l] == string[r]) {
                        r++;
                    }
                    arr[i] = r - l;
                    r--;
                }
            }
        }
        return arr;
    }
    return result;
}
