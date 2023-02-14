function solve(arr){

    let result = arr.sort((a, b) => a - b);
    
    return result[0] + ' ' + result [1];

}
console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));

function solved(arr) {
    return arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(" ")
}