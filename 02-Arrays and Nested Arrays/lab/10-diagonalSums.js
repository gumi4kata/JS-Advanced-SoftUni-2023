function solve (matrix){

    let main = 0;
    let second = 0;

    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
    }

    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {
        second += matrix[i][i];
    }

    console.log(main + ' ' + second);

}
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);