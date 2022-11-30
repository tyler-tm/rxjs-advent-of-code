import { readFile } from "./utils/inputParser.js"
import { map, reduce } from "rxjs"

const YEAR = 2021
const DAY = 2
const TRIM_LAST = true

export const solve = readFile(YEAR, DAY, TRIM_LAST)
    .pipe(map(x => x.split(' ')))
    .pipe(map(x => [
        x[0] === 'forward' ? [1, 0]
            : x[0] === 'down' ? [0, 1]
                : x[0] === 'up' ? [0, -1]
                    : [0, 0],
        x[1]
    ]))
    .pipe(reduce((acc, curr) => [
        acc[0] + (curr[0][0] * curr[1]),
        acc[1] + (curr[0][1] * curr[1])
    ], [0, 0]))
    .pipe(map(x => x[0] * x[1]))
