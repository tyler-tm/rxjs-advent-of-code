import { readFile } from './utils/inputParser.js'
import { map, reduce } from 'rxjs/operators'

const YEAR = 2022
const DAY = 4
const TRIM_LAST = false

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    map(x => x.split(',')),
    map(x => [x[0].split('-'), x[1].split('-')]),
    reduce((a, c) => Number(c[0][0]) >= Number(c[1][0]) && Number(c[0][1]) <= Number(c[1][0])
        || Number(c[1][0]) <= Number(c[0][1]) && Number(c[1][1]) >= Number(c[0][0])
        ? a + 1 : a, 0)
)
