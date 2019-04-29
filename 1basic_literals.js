const s1 = 'Hello';

//JS Behind the scene add a wrapper to it and convert it into object to use methods on it
s1.toLowerCase();
console.log(typeof s1);


const s2 = new String ('Hello')
console.log(typeof s2);
// console.log(navigator);

// ===================Object Literals===========================//
const book1 = {
    title:'JavaScript',
    author:'Saif',
    year:2018,
    getSummary(){
        return `${this.title} was written by ${this.author}`
    }
}
const book2 = {
    title:'JavaScript',
    author:'Saif Rehman',
    year:2019,
    getSummary(){
        return `${this.title} was written by ${this.author}`
    }
}
console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(Object.keys(book1));
console.log(Object.values(book1));
