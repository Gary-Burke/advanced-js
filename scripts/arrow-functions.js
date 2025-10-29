// Vanilla JavaScript Function
function addTowNumbers (a, b) {
    return a+ b;
}
let sum = addTowNumbers(3 ,3);
console.log(sum);


// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
    // Code block
    return a+ b;
}
let sum2 = addTwoNumbers2(3 ,5);
console.log(sum2);



// Single Line Arrow Function With Parameters
// const addTwoNumbers3 = (a, b) => (a + b); ALSO VALID
const addTwoNumbers3 = (a, b) => a + b;
let sum3 = addTwoNumbers3(6, 4);
console.log(sum3);



// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hi there!");


const sayHello = () =>console.log("Hello");



// Returning Multiple Lines
const returnMultipleLines = () => (
    `<P>
     This is a mulitple line string!
     <p>`
)
console.log(returnMultipleLines());


