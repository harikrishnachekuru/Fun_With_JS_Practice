// Anagram means - when ever the string/word/sentance that can be re-arranged/realigned to get match of the words if we do arrange the words Ex: mary , army --- By applying the words as sorted and compared it will give true because it wil match of each element after sorting in order.

const name1 = "Mary";
const name2 = "Army";

function anagramVal(name1, name2) {

    // step1 : make it to lowercase to avoid ambiguity issues
    let a = name1.toLowerCase();
    let b = name2.toLowerCase();

    // Step2 : sort the names which to get as ordered with splitting of each and every element/word of variable.

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}
console.log(name1, name2);