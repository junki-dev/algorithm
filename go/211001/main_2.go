package main

import (
	"fmt"
	"math"
)

func divide(dividend int, divisor int) int {

	flag := 1
	if dividend < 0 {
		dividend *= -1
		flag *= -1
	}

	if divisor < 0 {
		divisor *= -1
		flag *= -1
	}

	share := 0
	for dividend >= divisor {
		dividend -= divisor
		share++
	}

	share *= flag

	if share < math.MinInt32 {
		return math.MinInt32
	} else if share > math.MaxInt32 {
		return math.MaxInt32
	}

	return share
}

func main() {
	dividend := -2147483648
	divisor := -1

	result := divide(dividend, divisor)
	fmt.Println("result >>> ", result)
}
