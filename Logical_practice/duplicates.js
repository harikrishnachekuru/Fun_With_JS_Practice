// Find the duplicates in an array and print it

const duplicateArry = [12, 3, 1, 2, 33, 12, 2, 5, 6, 1];

// By using filter() in-built method to find duplicates with passing the parrameters as element, index and array of it.
const duplicates = duplicateArry.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log(duplicates, duplicates.length);
// Output will be [12,2,1]


// To find Unique values in an given array we can do same as finding of duplicates but except that index comparisions

const newArray = [12, 1, 3, 4, 1, 2, 32, 4, 55, 6, 2, 3, 12];

const uniqueArray = newArray.filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
    // To view the array in sorted with no duplicates
}).sort((a, b) => {
    return a - b;
})
console.log(uniqueArray);