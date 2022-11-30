import { promises as fsp } from 'fs'
import { from, iif, map, mergeMap, skipLast, takeLast } from 'rxjs'

export const readFile = (year, day, trimLast, delim) => {
    try {
        const input = from(fsp.readFile(
            `./inputs/${year}/day${day.toString().padStart(2, '0')}.txt`,
            'utf-8'
        ))
            .pipe(map(x => x.split(delim ?? /\r?\n/)))
            .pipe(mergeMap(x => x))
        return iif(() => trimLast, input.pipe(skipLast(1)), input)
    } catch (err) {
        console.log(err)
    }
}
