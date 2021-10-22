package main

import (
	"fmt"
	"strconv"
)

func isPalindrome(x int) bool {
	stringX := strconv.Itoa(x)
	flag := true

	if len(stringX) == 1 {
		return true
	}

	for i := 0; i < len(stringX)/2; i++ {
		fmt.Println("앞 / 뒤 >>> ", i, stringX[i], len(stringX)-i-1, stringX[len(stringX)-i-1])
		if stringX[i] == stringX[len(stringX)-i-1] {
			flag = true
		} else {
			flag = false
			break
		}
	}

	return flag
}

func main() {
	x := 212
	result := isPalindrome(x)

	fmt.Println(result)
}
