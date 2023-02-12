function solve(arr){

    const newArr = [];
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
        const currentCommand = arr[i];
        if(currentCommand === 'add'){
            newArr.push(counter++);
        } else if(currentCommand === 'remove'){
            newArr.pop(counter++);
        }
    }
    if(!newArr.length){
        console.log("Empty");
    } else{
        console.log(newArr.join('\n'));
    }

}
