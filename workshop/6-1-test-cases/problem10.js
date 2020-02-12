let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(abc) {
  const temp = abc.split(' ');
  let temp2 = [];
for (let i = 0; i<temp.length; i++){
const capitalLetter = temp[i].charAt(0).toUppercase() + temp[i].slice(1).toLowerCase();
temp2.push(capitalLetter);
}
return temp2.join(' ');

}

// Test cases
let inputs = ["No code changes below", "No code changes below", "No code changes below", "No code changes below", "No code changes below"];
let outputs = ["No Code Changes Below", "No Code Changes Below", "No Code Changes Below", "No Code Changes Below", "No Code Changes Below"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
