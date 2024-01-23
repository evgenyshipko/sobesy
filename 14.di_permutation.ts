
import { strict as assert } from 'node:assert';

function match(rules: string) {
    const res = []

    let min = 0
    let max = rules.length

    for (const rule of rules){
        if (rule === 'D'){
            res.push(max)
            max--
        }
        if (rule === 'I'){
            res.push(min)
            min++
        }
    }
    res.push(max) // после цикла max = min

    return res
}

assert.deepEqual(match('III') , [0,1,2,3])
assert.deepEqual(match('DDI') , [3,2,0,1])
assert.deepEqual(match('IDID') , [0,4,1,3,2])