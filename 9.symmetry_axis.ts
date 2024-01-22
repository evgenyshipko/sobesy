/* Вертикальная ось симметрии

Дан массив точек с целочисленными координатами (x, y). Определите, существует ли вертикальная прямая, делящая точки на 2 множества, симметричных относительно этой прямой.
На вход подаётся массив из точек в формате [x, y]: [[0, 0], [1, 1], ...]. Если на вход подали не массив, необходимо вернуть ошибку 'points must be array'.
Если точек нет, можно считать, что такая прямая есть. То есть функция должна вернуть true, если в качестве аргумента передали пустой массив.
*/

import { strict as assert } from 'node:assert';

type Point = [number, number]
const isSym = (points: Point[]) => {

    if (points.length === 0){
        return true
    }

    let minX = Infinity
    let maxX = -Infinity

    for (const point of points){
        if (point[0] > maxX){
            maxX = point[0]
        }
        if (point[0] < minX){
            minX = point[0]
        }
    }

    const center = (minX + maxX)/2

    let lower = 0
    let bigger= 0

    for (const point of points){
        if (point[0] < center){
            lower++
        }
        if (point[0] > center){
            bigger++
        }

        const oppositeX = Math.abs(center - point[0]) + center
        const founded = points.find(p => p[0] === oppositeX && p[1] === point[1])
        if (!founded){
            return false
        }
    }

    return lower === bigger;
}


assert.equal(isSym([
    [0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0], [4, 0]
]), true);

assert.equal(isSym([
    [0, 0], [0, 0], [1, 1], [2, 2], [3, 1], [4, 0]
]), false);

assert.equal(isSym([]), true);

assert.equal(isSym([
    [0, 0]
]), true);

assert.equal(isSym([
    [0, 0], [100500, 0]
]), true);

assert.equal(isSym([
    [0, 0], [100500, 1]
]), false);

assert.equal(isSym([
    [0, 0], [1, 0], [3, 0]
]), false);
