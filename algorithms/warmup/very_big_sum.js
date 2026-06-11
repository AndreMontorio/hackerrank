/**
 * A Very Big Sum
 * https://www.hackerrank.com/challenges/a-very-big-sum/problem
 * Algorithms > Warmup | Easy
 *
 * Task: sum an array of long integers whose values exceed the 32-bit range.
 *
 * Approach: accumulate in a simple loop; the test values stay within
 * JavaScript's safe integer range (2^53 - 1), so plain numbers work.
 * Complexity: O(n)
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    let total = 0;
    // Write your code here
    for(let i = 0; i < ar.length; i++) {
        total += ar[i];
    }
    
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
