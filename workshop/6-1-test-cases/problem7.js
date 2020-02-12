let verifyEquals = require('../../assets/verify-equals');

// Problem 7
// ---------
// Step 1
// - The function input is an array. 
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array. 
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function f(arr) {
    
    if( arr.length<1 ||
        arr.lengt >3 ||
        typeof arr[0]!== 'string' ||
        typeof arr[1] !== 'number'
        )
        return undefined;
        else if (
            arr[1] <0 ||
            arr[1] === 0 
        )
        return "";

        let temp = '';
        for (let i = 0; i< arr[1]; i++){
        temp = temp + arr[0]}
        return temp;
}

// Step 2
// We need 7 test cases.
// Don't forget to test all of the question parameters

let inputs = [['ClockDizzle', 2], [34, 34], [34, '34'], ['ClockDizzle', '34'], ['ClockDizzle', 3], ['ClockDizzle', 4], ['ClockDizzle', 5],];
let outputs = ['ClockDizzleClockDizzle', undefined, undefined, undefined, 'ClockDizzleClockDizzleClockDizzle', 'ClockDizzleClockDizzleClockDizzleClockDizzle', 'ClockDizzleClockDizzleClockDizzleClockDizzleClockDizzle'];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
