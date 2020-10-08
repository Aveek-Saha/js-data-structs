// Rabin Karp

export default function RabinKarp(pattern, text, prime, num_chars) {
    var m = pattern.length;
    var n = text.length;
    var j = 0;
    var p = 0;
    var t = 0;
    var h = 1;
    var ind = [];

    for (let i = 0; i < m - 1; i++) h = (h * num_chars) % prime;

    for (let i = 0; i < m; i++) {
        p = (num_chars * p + pattern[i].charCodeAt(0)) % prime;
        t = (num_chars * t + text[i].charCodeAt(0)) % prime;
    }

    for (let i = 0; i <= n - m; i++) {
        if (p == t) {
            for (j = 0; j < m; j++) {
                if (text[i + j].charCodeAt(0) != pattern[j].charCodeAt(0))
                    break;
            }

            if (j == m) ind.push(i);
        }

        if (i < n - m) {
            t =
                (num_chars * (t - text[i].charCodeAt(0) * h) +
                    text[i + m].charCodeAt(0)) %
                prime;
            if (t < 0) t = t + prime;
        }
    }
    return ind;
}
