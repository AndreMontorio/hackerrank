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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arrr) {   
    console.log(arrPositive(arrr));
    console.log(arrNegative(arrr));
    console.log(arrZero(arrr));
}

function arrPositive(arr) {
    let numberPositive = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            numberPositive += 1;
        }
    }
    
    return numberPositive / arr.length;
}

function arrNegative(arr) {
    let numberNegative = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            numberNegative += 1;
        }
    }
    
    return numberNegative / arr.length;
}

function arrZero(arr) {
    let numberZero = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            numberZero += 1;
        }
    }
    
    return numberZero / arr.length;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
