package main

import (
	"fmt"
	"math"
)

func myAtoi(s string) int {

	var bigInt int64
	sign := 1
	flag := false

	for _, c := range s {

		if c >= '0' && c <= '9' {
			if !flag {
				flag = true
			}
			bigInt = bigInt*10 + int64(c) - int64('0')
			if bigInt*int64(sign) > math.MaxInt32 {
				return math.MaxInt32
			} else if bigInt*int64(sign) < math.MinInt32 {
				return math.MinInt32
			}
		} else if !flag && c == '+' {
			flag = true
		} else if !flag && c == '-' {
			flag = true
			sign = -1
		} else if !flag && c == ' ' {
			continue
		} else {
			break
		}
	}

	return int(bigInt) * sign
}

func main() {
	s := "00000-42a1234"

	result := myAtoi(s)

	fmt.Println(result)
}
