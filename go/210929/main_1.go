package main

import "fmt"

func allCase(str string, start, end, n int, result *[]string) {

	if len(str) == n*2 {
		*result = append(*result, str)
		return
	}

	if start < n {
		allCase(str+"(", start+1, end, n, result)
	}

	if end < start {
		allCase(str+")", start, end+1, n, result)
	}
}

func generateParenthesis(n int) []string {
	result := make([]string, 0)
	allCase("", 0, 0, n, &result)

	return result
}

func main() {
	n := 3
	result := generateParenthesis(n)
	fmt.Println("result >>> ", result)
}
