console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

//above is reduce method, below is forEach method.

function arraySum(arrnum) {
    let initialValue = 0;
    arrnum.forEach(number => {
        initialValue += number;
        
    });{
        return initialValue;
    }

}
console.log(arraySum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


let favBook = {};

favBook.title = "Mastermind: How to Think Like Sherlock Holmes,";
favBook.author = " Written by Maria Konnikova,"
favBook.numberOfPages = " 276 pages,";
favBook.numberOfCompl = " 1 times completed";
favBook.info = favBook.title + favBook.author + favBook.numberOfPages + favBook.numberOfCompl;
console.log(favBook.info);

// seperate info function below
let secFavBook = {};
secFavBook.title = "Mastermind: How to Think Like Sherlock Holmes";
secFavBook.author = "Maria Konnikova"
secFavBook.numberOfPages = 276;
secFavBook.numberOfCompl = 1;

secFavBook.info = function() {
     return `${this.author} wrote the book ${this.title}, filled with ${this.numberOfPages} pages, you have read this book ${this.numberOfCompl} times. `
}

console.log(secFavBook.info());

console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog"

function reverseString(sentence) {
    let result = []
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      let letters = words[i].split("");
      letters.reverse();
      let reverseWord = letters.join("");
      result.push(reverseWord);
    }
    return result.join(" ");
  }
  

console.log(reverseString(sentence));

console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function reduceConverter(data) {
    return data.split("\n").reduce((output,row, index, arr) => {
        let values = row.split(",");
if (index == 0) {
    output.headers = values;
} else {
    let obj = {};
    values.forEach((val, index) => {
        if (index < output.headers.length) {
            obj[output.headers[index]] = val;
        } else {
            obj[`misc${index - output.headers.length + 1}`] = val;
        } 
    });
    if (!output.records) {
        output.records = [];
    }
    output.records.push(obj);
}
return output;
    }, {}).records;
}
console.log(reduceConverter(csvData));