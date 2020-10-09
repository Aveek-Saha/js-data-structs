// Powerset

export default function powerSet(array, index = 0, curr = '') {
    let result = [];
    let len = array.length;

    function powSet(index = 0, curr = '') {

        // Base case
        if (index == len) {
            result.push(curr.split(''));
            return;
        }
        powSet(index + 1, curr + array[index]);
        powSet(index + 1, curr);
    }

    powSet(index, curr);

    return result;
}
