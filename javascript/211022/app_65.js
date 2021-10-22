var isNumber = function(s) {
    
    let isNumber = false;
    let isDot = false;
    let isExp = false;
    let isSign = false;

    for (const c of s) {

        if (Number(c) >= 0 && Number(c) < 10) {
            isNumber = true
        } else if (c === `e` || c === `E`) {
            if (isExp || !isNumber) {
                console.log(`case1`)
                return false
            }
            
            isExp = true
            isSign = false
            isNumber = false
            isDot = false
        } else if (c === `+` || c === `-`) {
            if (isSign || isNumber || isDot) {
                console.log(`case2 ${c} ${isSign} ${isNumber} ${isDot}`)
                return false
            }

            isSign = true
        } else if (c === `.`) {
            if (isExp || isDot) {
                console.log(`case3`)
                return false;
            }

            isDot = true
        } else {
            console.log(`case4`)
            return false
        }
    }

    return isNumber;
};

const s = "-.7e+0435"
const result = isNumber(s)
console.log(`result >>> ${result}`)