import { readFile } from './utils/inputParser.js'
import { skip, tap } from 'rxjs/operators'

const YEAR = 2022
const DAY = 5
const TRIM_LAST = false

const diagram = [
    ['D', 'M', 'S', 'Z', 'R', 'F', 'W', 'N'],
    ['W', 'P', 'Q', 'G', 'S'],
    ['W', 'R', 'V', 'Q', 'F', 'N', 'J', 'C'],
    ['F', 'Z', 'P', 'C', 'G', 'D', 'L'],
    ['T', 'P', 'S'],
    ['H', 'D', 'F', 'W', 'R', 'L'],
    ['Z', 'N', 'D', 'C'],
    ['W', 'N', 'R', 'F', 'V', 'S', 'J', 'Q'],
    ['R', 'M', 'S', 'G', 'Z', 'W', 'V']
]

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    skip(diagram.reduce((a, c) => Math.max(c.length + 2, a), 0)),
    tap((x) => {
        const moveParts = x.match(/\d+/g).map(Number)
        diagram[moveParts[2] - 1].push(...diagram[moveParts[1] - 1].slice(-moveParts[0]))
        diagram[moveParts[1] - 1].length -= moveParts[0]
        console.log(String(diagram.map(x => x[x.length - 1])))
    })
)