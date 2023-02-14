// function solve(arr) {

//     let result = [];

//     for (const num of arr) {
//         if (num < 0) {
//             result.unshift(num);
//         } else {
//             result.push(num);
//         }
//     }

//     for (const num of result) {
//         console.log(num);
//     }

// }
// solve([7, -2, 8, 9]);


function solve(arr) {
    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v)
        return a
    }, [])
}
console.log(solve([7, -2, 8, 9]));