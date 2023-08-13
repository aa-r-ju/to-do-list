function add(a,b){
let sum = a + b;
return sum;
} 

function mul(a,b){
    let multi = a * b;
    return multi;
}

function min(a,b) {
    let minus = a - b;
    return minus;
}

function divi (a,b) {
    let divide = a / b;
    divide = divide.toFixed(2)
    return divide;
}

export {add,mul,min,divi};