/**
 * Between Two Sets
 * https://www.hackerrank.com/challenges/between-two-sets/problem
 * Algorithms > Implementation | Easy
 *
 * Task: count the integers x that are multiples of every element of
 * array a and divisors of every element of array b.
 *
 * Approach: generate the multiples of each element of a up to b[0],
 * keep the deduplicated ones divisible by every element of a, then
 * keep those that divide every element of b and return the count.
 * Complexity: O(k * (n + m)), where k is the number of candidate
 * multiples up to b[0]
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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let arr1 = [];
    let arr1mult = []
    let arr1Div = [];
    for(let x = 0; x <= a.length - 1; x++) {
        for(let i = 1; a[x] * i <= b[0]; i++) {
            arr1.push(a[x] * i);
        }
    }

	arr1.forEach(x => {
        if(a.every(y => x % y == 0)) {
		    arr1mult.push(x);
        }
	});
	
    
    if(a.length > 1) {
        let arrHelper = new Set();
        arr1mult.forEach(x => {
            arrHelper.add(x);
        });
        arr1mult = [...arrHelper];
    }
    else {
        arr1mult = arr1;
    }

    arr1mult.forEach(x => {
        if(b.every(y => y % x == 0)) {
            arr1Div.push(x);
        }
    });
    
    return arr1Div.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}