/*
Палиндром. Написать функцию, которая определяет является ли переданная строка палиндромом
(читается справа-налево и слева-направо одинаково)
Примеры палиндромов:
• Казак
• А роза упала на лапу Азора
• Do geese see God?
• Madam, I'm Adam
т.е. мы исключаем из решения все не число-буквенные символы и пробелы, большие и маленькие считаем равными
Ограничение по памяти О(1)
*/

import { strict as assert } from 'node:assert';

// второй вариант проверки - регуляркой
const isLetter = (letter: string) => letter.toLowerCase() !== letter.toUpperCase()

const isEqual = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

const isPalindrome = (str: string) => {
    let i = 0
    let j = str.length - 1

    while (i < j){
        if (!isLetter(str[i])) {
            i++
            continue
        }
        if (!isLetter(str[j])){
            j--
            continue
        }

        if (!isEqual(str[i], str[j])){
            return false
        }
        i++
        j--
    }
    return true
}

// computational complexity O(длина строки)

assert.equal(isPalindrome('Казак'), true)
assert.equal(isPalindrome('Жопа'), false)
assert.equal(isPalindrome('А роза упала на лапу Азора'), true)
assert.equal(isPalindrome('Do geese see God?'), true)
assert.equal(isPalindrome('Madam, I`m Adam'), true)

