function Book(title, author, year) {
    this.title = title,
        this.author = author,
        this.year = year
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author}`
}

// Creating new Constructor here
function Magzine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit Prototype
Magzine.prototype = Object.create(Book.prototype)

// creating Magzine Object
const magz1 = new Magzine('m1', 'John', 2012, 'Jan');


console.log(magz1);
console.log(magz1.getSummary());