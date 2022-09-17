var hello;

hello = () => {
    document.getElementById("demo").innerHTML += "Hello world!!!";
}

window.addEventListener("load", hello);

document.getElementById("btn1").addEventListener("click", hello);

document.getElementById("btn2").addEventListener("click", () => {document.getElementById("demo").innerHTML += "Hello 2";
});

var numbers = [1,2,3,4,5];
const squares = numbers.map(n => n * n);
document.write(squares);

var evens = new Array();
numbers.forEach(n => {
    if (n % 2 === 0) {
        evens.push(n);
    }
});
document.write('<br>');
document.write(evens);
document.write('<br>');

const author = {
    fullName: "Bob Alice",
    books: ["Book 01","Book 02","Book 03"],

    printBooks() {
        this.books.forEach(book => document.write(book + ' by ' + this.fullName + '<br>'));
    },

    printBooks1() {
        function printValue(book) {
            document.write(book + ' by ' + this.fullName + '<br>');
        }

        this.books.forEach(printValue);
    },

    printBooks2() {
        this.books.forEach(function(book) {
            document.write(book + ' by ' + this.fullName + '<br>');
        });
    }
};

author.printBooks();
author.printBooks1();
author.printBooks2();