var mySqrt = function(x) {
    
    if (x === 0) return 0
    else if (x < 4) return 1

    console.log(`start`)
    for (let i = 2; i <= x; i++) {
        console.log(`i --- ${i}`)
        if (i * i === x) {
            return i
        } else if (i * i > x) {
            return --i
        }
    }
};

const x = 5
const result = mySqrt(x)
console.log(`result >>> ${result}`)