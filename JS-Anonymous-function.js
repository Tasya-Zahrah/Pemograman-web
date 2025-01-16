// membuat anonymous function dengan parameter dan disimpan dalam variabel hello
let hello = function (name) {
    document.write(`Hello ${name} </br>`);
}
//memanggil anonymous function melalui variabel hello
hello('Tasya');

function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        document.write("Outer variable : " + outerVariable);
        document.write("Inner variable : " + innerVariable);
    }
    innerFunction("inner");
}

outerFunction("Outer");
innerFunction("inner"); //ERROR karena innerFunction hanya bisa di akses di dalam outerFunction

//arrow function
const greet = (name) => {
    console.log("hello, " + name + "!");
};

greet("tasya");

//closure

function outerFunction(outerParams) {
    return function innerFunction(innerParams) {
        document.write("Outer params: " + outerParams + "<br>");
        document.write("Inner params: " + innerParams + "<br>");
    }
}
const newFunction = outerFunction('outer');
newFunction('inner');
newFunction('outer');