// Converting first letter of an element or wor or string in the given array to capital letter.

const days = ["modnay", "tuesday", "wednesday", "thursday", "saturday", "sunday"];

const updatedArray = [];
for (let day of days) {

    day = day.charAt(0).toUpperCase() + day.substring(1);

    updatedArray.push(day);
    //console.log(day.substring(1));
    updatedArray.sort();
}
console.log(updatedArray);