// Rabin Karp

/**
 * This function finds all occurrences of a pattern in a text.
 * @param {string} pattern The pattern to search for
 * @param {string} text The string to search for in the pattern in
 * @param {number} prime A prime number to use for hashing
 * @param {number} num_chars The number of possible characters used
 * @returns {Array} A list of all indices where the pattern occurs.
 */
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
