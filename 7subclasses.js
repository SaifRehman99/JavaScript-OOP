//In this Es6 classes Inheritance we dont need to prototype and inherit the prototype methods of parent

class Book{
    constructor(title,author,year){
        this.title = title,
        this.author = author,
        this.year = year
    }
    // In the class, Method got prototyped
    getSummary(){
        return `${this.title} was written by ${this.author}`;
    }
    static res(){
        console.log('This is Static Function')
    }
}

class Magzine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
}
const mag1 = new Magzine('Mag' , 'Unk' , 2011 , "Feb");
console.log(mag1.getSummary())