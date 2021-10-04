package main

import (
	"fmt"
)

func push(container *[]string, str string) {
	*container = append(*container, str)
}

func pop(container *[]string) bool {
	if len(*container) < 1 {
		return false
	}

	copy := *container
	*container = copy[:len(*container)-1]

	return true
}

func isValid(s string) bool {
	var container string

	for _, c := range s {

		if len(container) < 1 && (c == ']' || c == '}' || c == ')') {
			return false
		}
		if (c == ']' && container[len(container)-1] == '[') || (c == '}' && container[len(container)-1] == '{') || (c == ')' && container[len(container)-1] == '(') {
			container = container[:len(container)-1]
			continue
		}

		container += string(c)
	}

	if container != "" {
		return false
	}

	return true
}

func main() {
	s := "())"
	result := isValid(s)

	fmt.Println("result >>> ", result)
}
