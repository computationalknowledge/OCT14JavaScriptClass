const startNumber = 100;
const endNumber = -13;
const stepNumber = 4;
var currentNumber = startNumber;
var sum = 0;
for (; currentNumber >= endNumber;) {
    // console.log("currentNumber", currentNumber);
    currentNumber -= stepNumber;
    sum += stepNumber;
}
console.log("the sum of all the stepped over numbers is ", sum);
