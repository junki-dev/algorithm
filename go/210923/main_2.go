package main

import (
	"fmt"
    "strconv"
    "math"
)

func reverse(x int) int {

    stringX := strconv.Itoa(x)
    flag := string(stringX[0])
    xLength := len(stringX)
    if flag == "-" {
        xLength--
    }

    var reverseX int
    for i := 0; i < xLength; i ++ {
        if reverseX == 0 {
            reverseX = x % 10
        } else {
            reverseX = (reverseX * 10) + (x % 10)
        }
        x /= 10
    }

    if int(math.MaxInt32) < reverseX {
        return 0
    }

    if int(math.MinInt32) > reverseX {
        return 0
    }

    return reverseX
}

func main() {
	x := -8192123124134123
	result := reverse(x)

	fmt.Println(result)
}