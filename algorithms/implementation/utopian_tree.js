/**
 * Utopian Tree
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 * Algorithms > Implementation | Easy
 *
 * Task: a tree starts at 1 meter, doubles its height each spring and
 * grows 1 meter each summer; print its height after n growth cycles.
 *
 * Approach: simulate the n cycles — odd cycles (spring) double the
 * height, even cycles (summer) add 1.
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
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
    let height = 1;
    
    if(n === 0) {
        return height;
    }
    let index = 1;
    while(n > 0 && index <= n) {
        if(index % 2 === 0) {
            height += 1;
        }
        else {
            height *= 2;
        }
        index++;
    }
    return height;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = utopianTree(n);

        ws.write(result + '\n');
    }

    ws.end();
}