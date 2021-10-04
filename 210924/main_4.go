package main

import (
	"fmt"
)

func convert(s string, numRows int) string {

	zigzag := map[int]string{}
	floor := 0
	move := 0

	for _, val := range s {
		zigzag[floor] += string(val)

		if floor == 0 {
			move = 1
		} else if floor == numRows-1 {
			move = -1
		}

		floor += move
	}

	resultString := ""
	for i := 0; i < len(zigzag); i++ {
		resultString += zigzag[i]
	}

	return resultString
}

func main() {
	s := "ABC"
	numRows := 3

	result := convert(s, numRows)

	fmt.Println(result)
}
