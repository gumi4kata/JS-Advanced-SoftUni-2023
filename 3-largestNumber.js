function largeNum(a, b, c) {

    let result = c;

    if(a > b && a > c){
        result = a;
    } else if(b > a && b > c){
        result = b;
    } 

    console.log(`The largest number is ${result}.`);

}
largeNum(5, -3, 16);