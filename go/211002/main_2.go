package main

import (
	"fmt"
)

func Max(a, b int) int {

	if a > b {
		return a
	}

	return b
}

func longestValidParentheses(s string) int {

	stack := []int{-1}
	result := 0

	for idx, c := range s {

		if c == '(' {
			stack = append(stack, idx)
		} else {
			stack = stack[:len(stack)-1]

			if len(stack) == 0 {
				stack = append(stack, idx)
			} else {
				result = Max(result, idx-stack[len(stack)-1])
			}
		}
	}

	return result
}

func main() {
	s := ")()())"

	result := longestValidParentheses(s)

	fmt.Println("result >>> ", result)
}
