var addBinary = function(a, b) {
    let result = ""
    let aIdx = a.length - 1
    let bIdx = b.length - 1
    let carry = 0
    while(aIdx >= 0 || bIdx >= 0 || carry) {

        let aNum = +a[aIdx] || 0
        let bNum = +b[bIdx] || 0 

        let sum = aNum + bNum + carry

        result = sum % 2 + result
        carry = sum > 1

        aIdx--
        bIdx--
    } 

    return result
};

const a = "1010"
const b = "1011"
const result = addBinary(a, b)
console.log(`result >>> ${result}`)