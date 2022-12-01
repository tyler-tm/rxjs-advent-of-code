import { readFile } from "./utils/inputParser.js"
import { mergeMap, reduce } from "rxjs"

const YEAR = 2022
const DAY = 1
const TRIM_LAST = false

export const solve = readFile(YEAR, DAY, TRIM_LAST)
    .pipe(reduce(
        (a, c) => c === ''
            ? [a[0].concat([a[1]]), 0]
            : [a[0], a[1] + parseInt(c)],
        [[], 0]))
    .pipe(mergeMap(x => x[0]))
    .pipe(reduce(Math.max))
