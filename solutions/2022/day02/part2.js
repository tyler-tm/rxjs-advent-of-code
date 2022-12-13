import { readFile } from './utils/inputParser.js'
import { map, reduce } from 'rxjs/operators'

const YEAR = 2022
const DAY = 2
const TRIM_LAST = false

const MOVE_VALUES = { 'A': 1, 'B': 2, 'C': 3, 'X': 0, 'Y': 3, 'Z': 6 }

const toExpectedMoveValue = (opponent, result) => result === 'Y' ? MOVE_VALUES[opponent]
    : result === 'Z' ? MOVE_VALUES[opponent] + 1 < 4 ? MOVE_VALUES[opponent] + 1 : 1 
    : MOVE_VALUES[opponent] - 1 > 0 ? MOVE_VALUES[opponent] - 1 : 3

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    map(x => x.split(' ')),
    reduce((a, c) => a + MOVE_VALUES[c[1]] + toExpectedMoveValue(c[0], c[1]), 0)
)
