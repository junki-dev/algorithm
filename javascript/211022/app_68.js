var leftJutify = function(words, diff, i, j) {    
    const space = diff - (j - i - 1)
    let temp = words[i++]
    for (let k = i; k < j; k++) {
        temp += ' ' + words[k]
    }

    return temp + ' '.repeat(space)
}

var middleJutify = function(words, diff, i, j) {

    const spaceNeed = j - i - 1
    const spaceBetween = Math.floor(diff / spaceNeed)
    let remainingSpaces = diff % spaceNeed
    let temp = words[i++]

    for (let k = i; k < j; k++) {
        const spacesToApply = spaceBetween + (remainingSpaces-- > 0? 1: 0)
        temp += ' '.repeat(spacesToApply) + words[k]
    }

    return temp
}

var fullJustify = function(words, maxWidth) {
    
    let i = 0
    let len = words.length
    const res = []

    while (i < len) {
        
        let j = i + 1
        let lineLen = words[i].length
        while(j < len && (lineLen + words[j].length + (j - i) <= maxWidth)) {
            lineLen += words[j].length
            j++
        } 

        const diff = maxWidth - lineLen
        const numOfWords = j - i
        if(numOfWords === 1 || j >= len) {
            res.push(leftJutify(words, diff, i, j))
        } else {
            res.push(middleJutify(words, diff, i, j))
        }

        i = j
    }

    return res
};

const words = ["This", "is", "an", "example", "of", "text", "justification."]
const maxWidth = 16
const result = fullJustify(words, maxWidth)
console.log(`result >>> ${result}`)