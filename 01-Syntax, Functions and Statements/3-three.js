function solve(number){

    let numToString = number.toString();
    let sum = 0;
    let isSum = true;
    let firstLetter = numToString[0];

    for (let i = 0; i < numToString.length; i++) {
        if(firstLetter !== numToString[i]){
            isSum = false;
        }
        sum += +numToString[i];
    }

    console.log(isSum);
    console.log(sum);

}
solve(1234);