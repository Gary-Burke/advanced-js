// Destructuring arrays
let ages = [30, 26, 27];

// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);


// Using rest parameter syntax
let fruits = ["apple", "banana", "pear", "peach", "orange"];
let [favourite, secondfavourite, ...others] = fruits;
console.log(favourite);
console.log(secondfavourite);
console.log(others);

let favFoods = {
    brian: "pizza",
    lara: "pasta",
    jimmy: "steak",
    anna: "ramen"
};
let {brian, lara, ...rest} = favFoods;
console.log(brian);
console.log(lara);
console.log(rest);