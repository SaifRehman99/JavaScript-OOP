const protoBook = {
    getSummary: function () {
        return `${this.title} was written by ${this.author}`;
    }
}

//you can create a new object using this
const book1 = Object.create(protoBook);
book1.title = 'JS';
book1.author = 'SAIF';
book1.year = 2019;
console.log(book1)