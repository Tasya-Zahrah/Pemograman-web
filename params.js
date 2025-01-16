function outerFunction(outerParams) {
    return function innerFunction(innerParams) {
        document.write("Outer params: " + outerParams + "<br>");
        document.write("Inner params: " + innerParams + "<br>");
    }
}
const newFunction = outerFunction('outer');
newFunction('inner');
newFunction('outer');