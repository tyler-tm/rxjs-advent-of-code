import { readFile } from "./utils/inputParser.js"
import { map, reduce } from "rxjs"

const YEAR = 2021
const DAY = 1
const TRIM_LAST = true

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    reduce((acc, curr) => [acc[0] + (curr > acc[1] ? 1 : 0), curr], [0, Number.MIN_VALUE]),
    map(x => x[0])
)
