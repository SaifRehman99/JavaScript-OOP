//=====================================Constructor=================================================//
// If we want to create an object of same,we use constructor(ES5)

function Book(title, author, year) {
    this.title = title,
        this.author = author,
        this.year = year,
        this.getSummary = function () {
            return `${this.title} was written by ${this.author}`
        }
}
const book1 = new Book('JS', 'SAIF', 2019);
console.log(book1);