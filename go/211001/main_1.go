package main

import "fmt"

func strStr(haystack string, needle string) int {

	flag := false
	if len(haystack) < 1 {
		if len(needle) > 0 {
			return -1
		}
		return 0
	}

	start, end := 0, len(needle)
	for end <= len(haystack) {

		if haystack[start:end] == needle {
			flag = true
			break
		}
		start++
		end++
	}

	if !flag {
		return -1
	}

	return start
}

func main() {
	haystack := ""
	needle := "a"

	result := strStr(haystack, needle)
	fmt.Println("result >>> ", result)
}
