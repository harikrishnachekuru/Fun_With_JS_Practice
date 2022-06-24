// Extracting few fields from the given json object and form a new array.

const names = {
    "students": [{
            name: "Hari",
            id: 10,
            email: "test1@yopmail.com"
        },
        {
            name: "Krish",
            id: 12,
            email: "test2@yopmail.com"
        },
        {
            name: "Porter",
            id: 13,
            email: "test3@yopmail.com"
        }
    ]
}

const out = names.students.map(function (item) {
    let studentObj = {
        name: item.name,
        email: item.email
    }
    return studentObj;
})
console.log(out);