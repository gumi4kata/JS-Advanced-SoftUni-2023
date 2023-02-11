function solve(arr) {
    arr = arr.map(Number)
    return arr[0] + arr[arr.length - 1]
}

// Other solution
// function solve(strings) {

//     let arr = strings.map(Number);

//     let first = arr.shift();
//     let last = arr.pop();

//     return first + last;

// }
// console.log(solve(['20', '30', '40']));
