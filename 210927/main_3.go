package main

import (
	"fmt"
)

var telDigits = map[byte]string{
	'2': "abc",
	'3': "def",
	'4': "ghi",
	'5': "jkl",
	'6': "mno",
	'7': "pqrs",
	'8': "tuv",
	'9': "wxyz",
}

func allCase(digits string, pos int, s string, strs *[]string) {
	fmt.Println("pos : ", pos, " | s : ", s)
	if pos == len(digits) {
		fmt.Println("case1 >>> ", *strs)
		*strs = append(*strs, s)
		return
	}

	for _, c := range telDigits[digits[pos]] {
		fmt.Println("case2 >>> ", *strs)
		fmt.Println("c >> ", string(c))
		allCase(digits, pos+1, s+string(c), strs)
	}
}

func letterCombinations(digits string) []string {
	result := []string{}
	if len(digits) < 1 {
		return []string{}
	}
	allCase(digits, 0, "", &result)
	return result
}

func main() {
	digits := ""
	result := letterCombinations(digits)

	fmt.Println("result >>> ", result)
}
