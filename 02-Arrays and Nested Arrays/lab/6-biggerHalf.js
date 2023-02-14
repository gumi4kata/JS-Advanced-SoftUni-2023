function solve(arr) {

    arr.sort((a, b) => a - b);
    const start = Math.floor(arr.length / 2);
    const result = [];

    for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}
solve([4, 7, 2, 5]);