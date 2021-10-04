package main

import (
	"fmt"
	"regexp"
)

func isMatch(s string, p string) bool {
	result, _ := regexp.MatchString("^"+p+"$", s)
	return result
}

func main() {
	s := "aa"
	p := "a*"

	result := isMatch(s, p)
	fmt.Println(result)
}
