/**
 * Number Line Jumps (Kangaroo)
 * https://www.hackerrank.com/challenges/kangaroo/problem
 * Algorithms > Implementation | Easy
 *
 * Task: two kangaroos start at positions x1 and x2 with jump distances
 * v1 and v2; determine whether they ever land on the same spot after
 * the same number of jumps (YES/NO).
 *
 * Approach: simulate up to 10,000 simultaneous jumps and check whether
 * the positions ever match.
 * Complexity: O(1) — fixed iteration bound
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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1;
    let jump2 = x2;
    let resp = "NO";
    for(let i = 0; i < 10000; i++) {
        jump1 += v1;
        jump2 += v2;
        if(jump1 == jump2) {
            resp = "YES";
            break;
        }
    }
    return resp;

    // CLEANER ALTERNATIVE
    // if (v1 <= v2) return "NO";

    // let resp = "NO";
    // while (true) {
    //     if (x2 < x1) { resp = "NO"; break; }
    //     if (x2 === x1) { resp = "YES"; break; }
    //     x1 += v1;
    //     x2 += v2;
    // }
    // return resp;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
