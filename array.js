let colors = ['red', 'green', 'blue', 'yellow'];

// Basic
for (let i = 0; i < colors.length; i++) {
    console.log(`color is ${colors[i]}`);
}

// Use forEach method
colors.forEach(color => `color is: ${console.log(color)}`);

var famousPersons = [
    {
        id: 0,
        name: 'Bill Gate',
        yearOfBirth: 1955
    },
    {
        id: 1,
        name: 'Steve Jobs',
        yearOfBirth: 1960
    },
    {
        id: 2,
        name: 'Lincoln',
        yearOfBirth: 1961
    }
];

// Use push
famousPersons.push({
    id: 3,
    name: 'xnohat',
    yearOfBirth: 1985
});

// Use concat
var famousPersons2 = famousPersons.concat({
    id: 4,
    name: 'xnohat2',
    yearOfBirth: 1985
});

console.log(`Famous persons is: ${JSON.stringify(famousPersons)}\n`);
console.log(`Famous persons 2 is: ${JSON.stringify(famousPersons2)}\n`);

// Sort
famousPersons.sort((person1, person2) => person1.name > person2.name);

console.log(`Famous person after sort by year of birth: ${JSON.stringify(famousPersons)}\n`);

// Filter
famousPersons.filter(person => person.yearOfBirth > 1985);
console.log(`Famous person after filter by year of birth: ${JSON.stringify(famousPersons)}\n`);