// Levenshtein Distance algorithm

export default function LevenshteinDistance(a, b) {
    let distanceTable = new Array(b.length + 1)
        .fill(0)
        .map(() => Array(a.length + 1).fill(0));

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
