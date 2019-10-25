let data = [
    {
        country: 'China',
        pop: 1409517397,
    },
    {
        country: 'India',
        pop: 1339180127,
    },
    {
        country: 'USA',
        pop: 324459463,
    },
    {
        country: 'Indonesia',
        pop: 263991379,
    }
];
// Using Reduce add all the population of the countries except China.
const totalPopulation = data.reduce((acc, currentObject) => acc + currentObject.pop, -data[0].pop);
console.log('Total population except China ---- ', totalPopulation);

// OR

const totalPopulation2 = data.reduce((acc, obj) => {
    return obj.country === 'China' ? acc : acc + obj.pop;
}, 0);

console.log('Total Population 2 ---- ', totalPopulation2);