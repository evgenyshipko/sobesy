/*
Подотрезок с суммой X
Дан массив целых чисел. Нужно найти и вернуть количество подотрезков (непрерывных подпоследовательностей) с заданной суммой k.
Если это невозможно, функция должна вернуть 0.
 */

// ([1, 1, 1], 2) -> 2
// ([1, 2, 1], 3) -> 2
// ([1, 2, 5, 3], 3) -> 2
// ([10, 5, 6, 7, 8, 7], 15) -> 3

import { strict as assert } from 'node:assert';
function subarraySum(nums, k) {

    let counter = 0

    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){
            sum += nums[j]
            if(sum === k){
                counter++
                break
            }
            if(sum > k){
                break
            }
        }
    }

    return counter
}

assert.equal(subarraySum([1, 1, 1], 6), 0)
assert.equal(subarraySum([1, 1, 1], 2), 2)
assert.equal(subarraySum([1, 2, 1], 3), 2)
assert.equal(subarraySum([1, 2, 5, 3], 3), 2 )
assert.equal(subarraySum([10, 5, 6, 7, 8, 7], 15), 3)