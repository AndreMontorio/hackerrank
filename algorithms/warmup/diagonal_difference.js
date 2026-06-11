/**
 * Diagonal Difference
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 * Algorithms > Warmup | Easy
 *
 * Task: given a square matrix, print the absolute difference between
 * the sums of its two diagonals.
 *
 * Approach: one loop sums the primary diagonal (arr[i][i]), a second
 * loop sums the secondary diagonal (arr[i][n - 1 - i]); return the
 * absolute difference.
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let matrixSize = arr.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    
    for(let i = 0; i < matrixSize; i++) {
        diagonal1 += arr[i][i];
    }

    for(let x = (matrixSize - 1); x >= 0; x--) {
        diagonal2 += arr[x][(matrixSize - 1) - x];
    }
    return Math.abs(diagonal1 - diagonal2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}


// After submitting, I researched better ways to solve it.
// I believe the version below is the cleanest approach:
// both diagonals can be summed in a single pass.

// function diagonalDifference(arr) {
//     let primaryDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         primaryDiagonalSum += arr[i][i];
//         secondaryDiagonalSum += arr[i][arr.length - 1 - i];
//     }

//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
// }