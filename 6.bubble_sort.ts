// bubble sort
// memory complexity: O(1)
// computational complexity: O(n^2)

import { strict as assert } from 'node:assert';

const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const bubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j + 1] < arr[j]){
                swap(arr, j + 1, j)
            }
        }
    }
    return arr
}

assert.deepEqual(bubbleSort([0, -1, 6, 3, 8, 11]), [-1, 0, 3, 6, 8, 11])