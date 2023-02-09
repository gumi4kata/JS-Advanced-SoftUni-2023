function solve(num1, num2){

    if(num2 !== 0){
        return solve(num2, num1 % num2)
    } else {
        console.log(num1);
    }

}
solve(2154, 458);