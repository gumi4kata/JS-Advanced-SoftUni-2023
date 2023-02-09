function operators(a, b, operator) {

    switch (operator) {
        case '+': console.log(a + b);;
            break;
        case '-': console.log(a - b);;
            break;
        case '/': console.log(a / b);;
            break;
        case '*': console.log(a * b);;
            break;
        case '**': console.log(a * b);;
            break;
        case '%': console.log(a * b);;
            break;
    }

}
operators(5, 6, '+');

function getResult (num,num2,string){
    let operator = string
    let operators = {
        "+": function(a, b) { return a + b; },
        "-": function(a, b) { return a - b; },
        "*": function(a, b) { return a * b; },
        "/": function(a, b) { return a / b; },
        "%": function(a, b) { return a % b; },
        "**": function(a, b) { return a ** b; }
      };
 
      let result = operators[operator](num, num2);
      return console.log(result)
}
getResult(5, 6, '*')