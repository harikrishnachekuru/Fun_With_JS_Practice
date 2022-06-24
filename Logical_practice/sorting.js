// Simple sorting of numbers in an array

const unsortedArray = [12, 3, 1, 4, 6, 7, 9, 10];

// The reason of using a and b value form is like usually the valus will give wrong with sort as first element will be 12 in te above case then after it will start sorting.
const sortedArray = unsortedArray.sort((a, b) => {
    return a - b;
});
console.log(sortedArray);


// String Sorting with first letter -- we can directly sort it using the sort method.

const fruits = ['Banana', 'Orange', 'Pineapple', 'Mango'];

const sortingString = fruits.sort();
//Note if we want to retun / reverse of it as descending order we can do directly by sorting then applyng the reverse method to the the sorted string.
console.log(sortingString);


//To print highest or lowest Numbers in an given array we can do it by sorting and comparing of the values through which if the value greater than the new element.

const findHighArray = [1, 12, 34, 25, 54, 100, 120];

const newArray = findHighArray.sort((a, b) => {
    return a - b;
})

let highest = newArray[newArray.length - 1];
let lowest = newArray[0];
console.log(newArray, highest, lowest);


// The other way of Finding Highest number value in the given array is

const highNum = [1, 23, 122, 34, 5, 6, 7, 8, 12];

function findMax(arr) {
    return arr.reduce(function (prev, curr) {
        return prev > curr ? prev : curr;
    })
}
console.log(findMax(highNum));