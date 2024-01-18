// Create a function that takes a positive integer and returns the next bigger number that can be
// formed by rearranging its digits. For example:
//
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// If the digits can't be rearranged to form a bigger number, return -1 :
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

//https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n){
    if(n < 10){
        return -1
    }

    const numArr = n.toString().split('')

    for(let i = numArr.length - 1; i >= 1; i--){
        const a = numArr[i-1]
        const b = numArr[i]
        if(b > a){ // find first case when number on i-1 position less tha number on i position
            const tail = numArr.slice(i).map(item => Number(item)).sort()

            let nextBiggerThanA;
            for(let j = 0; j < tail.length; j++){
                const num = tail[j]
                if(num > a){
                    nextBiggerThanA = num
                    tail.splice(j, 1) // drop nextBiggerThanA from tail
                    tail.push(a)
                    tail.sort() // sort ASC
                    break;
                }
            }

            numArr[i - 1] = nextBiggerThanA // swap a and nextBiggerThanA

            return Number(numArr.slice(0, i).join('') + tail.map(item => item.toString()).join(''))
        }
    }
    return -1
}