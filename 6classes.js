class Book{
    constructor(title,author,year){
        this.title = title,
        this.author = author,
        this.year = year
    }
    // in class the method got prototyped
    getSummary(){
        return `${this.title} was written by ${this.author}`;
    }
    static res(){
        console.log('This is Static Function')
    }
}
const book1 = new Book('JS','SAIF','2019');
console.log(book1);
console.log(Book.res());