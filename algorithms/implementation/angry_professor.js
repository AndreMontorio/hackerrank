/**
 * Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 * Algorithms > Implementation | Easy
 *
 * Task: the professor cancels class if fewer than k students arrive on
 * time (arrival time <= 0 means on time). For each test case print YES
 * (class cancelled) or NO.
 *
 * Approach: sort the arrival times ascending; the index of the first
 * positive time equals the number of on-time students, then compare it
 * with k.
 * Complexity: O(n log n)
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
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
    a.sort((a, b) => a - b);
    let answer = "";
    
    for(let i = 0; i <= a.length; i++) {
        if(a[i] > 0){
            answer = i  >= k  ? "NO": "YES";
            break;
        }
    }
    
    return answer;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const result = angryProfessor(k, a);

        ws.write(result + '\n');
    }

    ws.end();
}
