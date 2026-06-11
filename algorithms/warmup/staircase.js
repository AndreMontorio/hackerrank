/**
 * Staircase
 * https://www.hackerrank.com/challenges/staircase/problem
 * Algorithms > Warmup | Easy
 *
 * Task: print a right-aligned staircase of '#' characters of height n.
 *
 * Approach: for each row i, print (n - i) spaces followed by i hashes
 * using String.repeat.
 * Complexity: O(n^2) characters printed
 */

'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    
    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);

        console.log(spaces + hashes);
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
