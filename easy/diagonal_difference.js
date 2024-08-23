// link problem
// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

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
    let tamanhoMatriz = arr.length;
    let diferenca = 0;
    let diagonal1 = 0;
    let diagonal2 = 0;
    
    for(let i = 0; i < tamanhoMatriz; i++) {
        diagonal1 += arr[i][i];
    }

    for(let x = (tamanhoMatriz - 1); x >= 0; x--) {
        diagonal2 += arr[x][(tamanhoMatriz - 1) - x];
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


// Apos entrega, pesquisei formas melhores de fazer
// Acredito que a forma abaixo seja a maneira mais correta.

// function diagonalDifference(arr) {
//     let primaryDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         primaryDiagonalSum += arr[i][i];
//         secondaryDiagonalSum += arr[i][arr.length - 1 - i];
//     }

//     return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
// }