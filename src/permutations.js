// Generate permutations

export default function Permutations(array) {

    let n = array.length;
    let result = '';
    let output = [];
    heaps_algorithm(array, n);
    function heaps_algorithm(arr, n) {
        if (n == 1) {
            result += arr.join('') + ' ';
            return;
        }

        for (let i = 0; i < n; i++) {
            heaps_algorithm(arr, n - 1);
            if (n % 2 == 0) {
                let x = array[i];
                array[i] = array[n - 1];
                array[n - 1] = x;
            }
            else {
                let x = array[0];
                array[0] = array[n - 1];
                array[n - 1] = x;
            }
        }
    }
    let temp = result.split(' ');
    let final = temp.slice(0, temp.length - 1);
    final.forEach(ele => {
        output.push(ele.split(''));
    });
    return output;
}