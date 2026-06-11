/**
 * Climbing the Leaderboard
 * https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 * Algorithms > Implementation | Medium
 *
 * Task: the leaderboard uses dense ranking (ties share a rank); for
 * each of the player's scores (given in ascending order), print the
 * rank the player would occupy.
 *
 * Approach: deduplicate the scores with a Set to get the dense ranking,
 * then walk a single pointer from the bottom of the board upward as the
 * player's scores increase (two-pointer); the rank is pointer + 2.
 * Complexity: O(n + m)
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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    let newRank = [ ...new Set(ranked)];

    let result = [];

    let pointer = newRank.length - 1;

    for(let i = 0; i < player.length; i++) {

        while(pointer >= 0 && player[i] >= newRank[pointer]) {
            pointer--;
        }

        result.push(pointer + 2);

    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}