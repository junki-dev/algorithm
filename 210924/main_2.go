package main

import (
	"fmt"
	"strings"
)

func lengthOfLongestSubstring(s string) int {

	longest := 0
	uniqueS := ""
	for i := 0; i < len(s); i++ {
		if !strings.Contains(uniqueS, string(s[i])) {
			uniqueS += string(s[i])
			if longest < len(uniqueS) {
				longest = len(uniqueS)
			}
			continue
		} else {
			if longest < len(uniqueS) {
				longest = len(uniqueS)
			}
			if string(s[i-1]) == string(s[i]) {
				uniqueS = string(s[i])
			} else {
				uniqueS = uniqueS[strings.Index(uniqueS, string(s[i]))+1:] + string(s[i])
			}
		}

		fmt.Println("uniqueS >>> ", uniqueS)
		fmt.Println("---------------------")
	}

	return longest
}

func main() {
	s := "nfpdmpi"
	result := lengthOfLongestSubstring(s)

	fmt.Println(result)
}
