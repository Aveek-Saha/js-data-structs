// Fisher-Yates

/**
 * This function randomly shuffles an array using the Fisher-Yates algorithm.
 * @param {any[]} arr - The array of elements to shuffle
 * @returns {any[]} - The shuffled array.
 */
export default function FisherYates(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
