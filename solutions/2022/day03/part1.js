import { readFile } from './utils/inputParser.js'
import { map, reduce } from 'rxjs/operators'

const YEAR = 2022
const DAY = 3
const TRIM_LAST = false

const lowercase = 'abcdefghijklmnopqrstuvwxyz'

export const splitArray = (a, i) => [a.slice(0, i), a.slice(i)]

const toPriority = (c) => {
    if (lowercase.includes(c)) {
        return c.charCodeAt(0) - 96
    }
    return c.charCodeAt(0) - 64 + 26
}

const getDuplicates = (lineParts) => {
    const duplicates = []
    for (let i = 0; i < lineParts[1].length; i++) {
        if (lineParts[0].includes(lineParts[1][i]) && !duplicates.includes(lineParts[1][i])) {
            duplicates.push(lineParts[1][i])
        }
    }
    return duplicates
}

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    map(x => splitArray(x, x.length / 2)),
    map(getDuplicates),
    map(x => x.reduce((a, c) => a + toPriority(c), 0)),
    reduce((a, c) => a + c, 0)
)
