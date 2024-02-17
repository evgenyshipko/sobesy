/* Написать реализацию метода split класса String */

import { strict as assert } from 'node:assert';

function split(str: string, delimiter?: string) {
    const res: string[] = []

    if(!str){
        return res
    }

    if(!delimiter){
        for (const letter of str){
            res.push(letter)
        }
        return res
    }

    let index = 0

    while(true){
        const newIndex = str.indexOf(delimiter, index)

        if (newIndex < 0){
            break
        }

        if (newIndex === index){
            index += delimiter.length
            continue
        }

        res.push(str.substring(index , newIndex))

        index = newIndex
    }

    if (index < str.length){
        res.push(str.substring(index))
    }

    return res
}

assert.deepEqual(split('12345'),['1','2','3','4','5'])
assert.deepEqual(split('12345',''),['1','2','3','4','5'])
assert.deepEqual(split('12345',null),['1','2','3','4','5'])
assert.deepEqual(split('1$2$3$4','$'), ['1','2','3','4'])
assert.deepEqual(split('111nn23434nn332432nn4','nn'), ['111','23434','332432','4'])
assert.deepEqual(split('nnm23434nnm332432nnm4nnm','nnm'), ['23434','332432','4'])

