// Levenshtein Distance algorithm

/**
 * This function finds the Levenshtein distance between two strings.
 * @param {string} a any string
 * @param {string} b any string
 * @returns {number} the minimum edit distance between the two strings.
 */
export default function LevenshteinDistance(a, b) {
    let distanceTable = new Array(a.length + 1)
        .fill(0)
        .map(() => Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i += 1) {
        for (let j = 0; j <= b.length; j += 1) {
            if (i == 0) distanceTable[i][j] = j;
            else if (j == 0) distanceTable[i][j] = i;
            else if (a[i - 1] == b[j - 1])
                distanceTable[i][j] = distanceTable[i - 1][j - 1];
            else
                distanceTable[i][j] =
                    1 +
                    Math.min(
                        distanceTable[i][j - 1],
                        distanceTable[i - 1][j],
                        distanceTable[i - 1][j - 1]
                    );
        }
    }

    return distanceTable[a.length][b.length];
}
