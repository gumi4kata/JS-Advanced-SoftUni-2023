function getSquare(number) {
    number = Number(number)
    for (let i = 0; i < number; i++) {
        let row = "";
        for (let j = 0; j < number; j++) {
            row += " *";
        }
        console.log(row);
    }
}