package main

import (
	"fmt"
)

func myPow(x float64, n int) float64 {

	result := 1.0

	if n == 0 {
		return result
	}

	if n < 0 {
		x = 1 / x
		n *= -1
	}
	
	half := myPow(x, int(n / 2))
	full := half * half
	if n % 2 == 0 {
		return full
	}

	return full * x
}

func main() {
	x := 3.00000
	n := 3

    result := myPow(x, n)
    fmt.Println("result >>> ",result)
}