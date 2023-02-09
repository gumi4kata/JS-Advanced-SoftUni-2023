function aggregateElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`${sum}`);
 
 
    let inverseSum = 0;
    for (let i = 0; i < arr.length; i++) {
        inverseSum += 1 / arr[i];
    }
    console.log(`${inverseSum}`);
 
    let concatenation = "";
    for (let i = 0; i < arr.length; i++) {
        concatenation += arr[i].toString();
    }
    console.log(`${concatenation}`);
}