import { readFile } from './utils/inputParser.js'
import { map, reduce } from 'rxjs/operators'

const YEAR = 2022
const DAY = 2
const TRIM_LAST = false

const MOVE_VALUES = { 'A': 1, 'B': 2, 'C': 3, 'X': 1, 'Y': 2, 'Z': 3 }

const toResultScore = (opponent, player) =>
    MOVE_VALUES[player] === MOVE_VALUES[opponent] ? 3
        : [1, -2].includes(MOVE_VALUES[player] - MOVE_VALUES[opponent]) ? 6
        : 0

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    map(x => x.split(' ')),
    reduce((a, c) => a + toResultScore(c[0], c[1]) + MOVE_VALUES[c[1]], 0)
)
