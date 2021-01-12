let add = function (a, b) {
    return a + b;
}

let multiply = function (a, b) {
    return a * b;
}

let calc = function (num1, num2, b) {
    return b (num1, num2);
}

setTimeout (function () {
    console.log ("Das wars!");
}, 1000);

console.log (calc (2, 3, multiply));

console.log (calc (2, 3, function (a, b) {
    return a - b;
}));

