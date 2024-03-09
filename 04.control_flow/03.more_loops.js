// for of 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const i of greetings) {
    if(i ==" "){
        continue
    }
    // console.log(i);
}
 // Maps
const langNames = {
    js : 'javcascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple',
}

for (const key in langNames) {
    // console.log(`the key ${key} and object ${langNames[key]}`);
}

// filter 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNums = nums.filter( (num) => {
    return num > 4
})
// console.log(myNums);

// fliter example :- 
const allBooks = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const book = allBooks.filter( (bk) => bk.edition > 2000)

console.log(book);