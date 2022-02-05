var a = +prompt("Enter first number")
var b = prompt("Enter Process")
var c = +prompt("Enter Second Number")
var d;
switch (b) {
    case "+":
        d = a + c        
        break;
    case "-":
        d = a - c
        break;
    case "*":
        d = a * c
        break;
    case "/":
        (c==0) ? d = "ZeroDivision Error" : d = a / c;
        break;
    default:
        console.log("Please enter valid number");
        break;
}

console.log(d)