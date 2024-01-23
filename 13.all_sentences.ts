// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...

function allSentences(words) {
    const indexes = []
    for (let i = 0; i < words.length; i++){
        indexes[i] = 0
    }

    let isAvailable = true

    const increaseIndex = () => {
        for (let j = words.length - 1; j > 0; j--){
            if (indexes[j] < words[j].length - 1){
                indexes[j]++
                return
            } else if (indexes[j - 1] < words[j - 1].length - 1){
                for (let k = j; k < words.length; k++){
                    indexes[k] = 0
                }
                indexes[j - 1]++
                return;
            }
        }
        isAvailable = false
    }

    return () => {
        if (!isAvailable){
            return undefined
        }

        const strArr = []
        for (let arrNum = 0; arrNum < words.length; arrNum++){
            const index = indexes[arrNum]
            strArr.push(words[arrNum][index])
        }

        console.log(indexes)

        increaseIndex()
        return strArr.join(' ')
    }
}

const nextSentence = allSentences([
    ['внучка', 'внучок', 'здрасьте'],
    ['маша', 'махать', 'машу'],
    ['гриб', "белый", 'бобр']
]);

console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());
console.log(nextSentence());