// Membuat function dengan nama sayHello
function sayHello() {
    document.write("Hello folks!");
}

// Memanggil function sayHello
sayHello();

function sayHelloWithParams(firstName, lastName = 'Doe') {
    document.write("hello" + firstName + "" + lastName + "! <br>");
}
sayHelloWithParams('john');
sayHelloWithParams('john', 'smith');