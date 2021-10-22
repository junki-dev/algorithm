var plusOne = function(digits) {
    
    const len = digits.length

    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }

        digits[i] = 0
    }

    digits.unshift(`1`)
    return digits
};

const digits = [9, 9]
const result = plusOne(digits)
console.log(`result >>> ${result}`)