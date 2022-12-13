import { readFile } from './utils/inputParser.js'
import { map, reduce } from 'rxjs/operators'

const YEAR = 2022
const DAY = 3
const TRIM_LAST = false

const ld = 'a'.charCodeAt(0) - 1
const ud = 'A'.charCodeAt(0) - 27

export const solve = readFile(YEAR, DAY, TRIM_LAST).pipe(
    // Not going to figure out how to make a sliding window of events in an
    //   Observable right now, so giving up on RxJS for this
    reduce((a, c) => a.concat([c]), []),
    map((lines) => {
        let result = 0
        for (let i = 0; i < lines.length; i += 3) {
            const rem = [lines[i + 1], lines[i + 2]]
            for (let j = 0; j < lines[i].length; j++) {
                const c = lines[i][j]
                if (rem.every((a) => a.includes(c))) {
                    const p = c.charCodeAt(0)
                    result += c >= 'a' && c <= 'z' ? p - ld : p - ud
                    break
                }
            }
        }
        return result
    })
)
