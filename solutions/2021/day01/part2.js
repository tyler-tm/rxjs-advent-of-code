import { readFile } from "./utils/inputParser.js"
import { map, reduce } from "rxjs"

const YEAR = 2021
const DAY = 1
const TRIM_LAST = true

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    map(x => parseInt(x)),
    reduce((acc, curr) => {
        if (acc.items.length < 3) {
            acc.items.push(curr)
            return acc
        }
        acc.count = acc.count + (curr > acc.items[0] ? 1 : 0)
        acc.items.shift()
        acc.items.push(curr)
        return acc
    }, { count: 0, items: [] }),
    map(x => x.count)
)
