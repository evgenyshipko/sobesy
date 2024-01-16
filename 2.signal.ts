/*
 Даны два сигнала в форме:
 a = [[3, 1], [3, 1], [2, 2], [5, 10]]
 b = [[1, 1], [2, 6], [4, 2], [1, 1], [4, 4], [1, 6]]
 где [x, y] - длительность импульса и амплитуда.
 Найти сумму этих сигналов.
*/
import { strict as assert } from 'node:assert';

const merge = (a: number[][], b: number[][]) => {
    let i = 0
    let j = 0

    const result = []

    while (i < a.length && j < b.length){
        const timeA = a[i][0]
        const timeB = b[j][0]

        const sumAmpl = a[i][1] + b[j][1]

        if (timeA > timeB){
            a[i][0] -= timeB
            j++
            if (result.length> 0 && result[result.length - 1][1] === sumAmpl){
                result[result.length - 1][0] += timeB
                continue
            }
            result.push([timeB, sumAmpl])
        }else if (timeB > timeA){
            b[j][0] -= timeA
            i++
            if (result.length> 0 && result[result.length - 1][1] === sumAmpl){
                result[result.length - 1][0] += timeA
                continue
            }
            result.push([timeA, sumAmpl])
        }else {
            result.push([timeA, sumAmpl])
            i++
            j++
        }
    }

    if (j < b.length){
        result.push(...b.slice(j))
    }
    if (i < a.length){
        result.push(...a.slice(i))
    }

    return result
}


const a = [[3, 1], [3, 1], [2, 2], [5, 10]]
const b = [[1, 1], [2, 6], [4, 2], [1, 1], [4, 4], [1, 6]]

assert.deepEqual(merge(a, b), [
        [ 1, 2 ],  [ 2, 7 ],
        [ 3, 3 ],  [ 1, 4 ],
        [ 1, 3 ],  [ 4, 14 ],
        [ 1, 16 ]
    ]
)


const a1 = [[123456789234143134, 3], [987654321864764, 2]]
const b1 = [[5, 2], [235145, 2], [154623475, 5]]

assert.deepEqual(merge(a1, b1), [
        [ 235150, 5 ],
        [ 154623475, 8 ],
        [ 123456789079284510, 3 ],
        [ 987654321864764, 2 ]
    ]
)



// computational complexity: O(размер a + размер b)