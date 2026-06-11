/**
 * Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 * Algorithms > Implementation | Easy
 *
 * Task: each lowercase letter has a height; compute the area of the
 * highlight rectangle for a word — tallest letter height times word
 * length (each letter is 1mm wide).
 *
 * Approach: map each letter of the word to its height via its alphabet
 * index, sort the heights descending and multiply the tallest by the
 * word length.
 * Complexity: O(n log n) due to the sort
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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    let indexOfLetters = [];
    let abc = [
                'a', 'b', 'c', 'd', 'e', 'f', 'g',
                'h', 'i', 'j', 'k', 'l', 'm', 'n',
                'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z'
              ];
    let valueOfIndexLetters = [];

    word.split('').forEach(letter => {
       indexOfLetters.push(abc.indexOf(letter));
    });


    indexOfLetters.forEach((index) => {
        valueOfIndexLetters.push(h[index]);
    })

    valueOfIndexLetters.sort((a, b) => b - a);

    return valueOfIndexLetters[0] * word.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
