// Finding of total number of duplicate values in an array of each element by using the reduce method

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Apr', 'Jan', 'Jul', 'Aug', 'Feb', 'Oct'];

const duplicateCount = months.reduce((obj, month) => {
    //by default create an object and do not assign any value then it will be undefined.
    //If the month hath is available then assign it to 1 else we will increment and return the obj.
    if (obj[month] === undefined) {
        obj[month] = 1;
        return obj;
    } else {
        obj[month]++;
        return obj;
    }
}, {});

console.log(duplicateCount);