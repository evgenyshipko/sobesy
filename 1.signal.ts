/*
 Даны два сигнала в форме:
 a = [[3, 1], [3, 1], [2, 2], [5, 10]]
 b = [[1, 1], [2, 6], [4, 2], [1, 1], [4, 4], [1, 6]]
 где [x, y] - длительность импульса и амплитуда.
 Найти сумму этих сигналов.
*/

import { strict as assert } from 'node:assert';

const glue = (a: number[][], b: number[][]) => {
    const result = []
    let i = 0
    let j = 0
    let timeA = a[0][0];
    let timeB = b[0][0]

    // обходим оба массива по времени с тактом цикла в одну секунду
    while (i < a.length || j < b.length){
        const itemA = a[i]
        let amplA = 0
        if (itemA){
            amplA = itemA[1]
            timeA = timeA - 1
            if (timeA === 0){
                i++
                timeA = a[i] ? a[i][0] : undefined
            }
        }

        const itemB = b[j]
        let amplB = 0
        if (itemB){
            amplB = itemB[1]
            timeB = timeB - 1
            if (timeB === 0){
                j++
                timeB = b[j] ? b[j][0] : undefined
            }
        }

        result.push([1, amplA + amplB])
    }

    // склеиваем точки с одинаковой амплитудой в отрезки
    const glued = []
    for (let [time, ampl] of result){
        const lastGlued = glued.length > 0 ? glued[glued.length - 1] : [null, null]
        if (lastGlued[1] === ampl) {
            lastGlued[0] += 1
        }else{
            glued.push([time, ampl])
        }
    }

    return glued
}

// computational complexity O(время выполнения)
// memory complexity O(n)

const a = [[3, 1], [3, 1], [2, 2], [5, 10]]
const b = [[1, 1], [2, 6], [4, 2], [1, 1], [4, 4], [1, 6]]
assert.deepEqual(glue(a, b), [
        [ 1, 2 ],  [ 2, 7 ],
        [ 3, 3 ],  [ 1, 4 ],
        [ 1, 3 ],  [ 4, 14 ],
        [ 1, 16 ]
    ]
)


// а вот такие условия убивают это решение :)
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
const a1 = [[123456789234143134, 3], [987654321864764, 2]]
const b1 = [[5, 2], [235145, 2], [154623475, 5]]

// assert.deepEqual(glue(a1, b1), [
//         [ 235150, 5 ],
//         [ 154623475, 8 ],
//         [ 123456789079284510, 3 ],
//         [ 987654321864764, 2 ]
//     ]
// )
