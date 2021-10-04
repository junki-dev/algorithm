package main

import (
	"fmt"
)

func longestCommonPrefix(strs []string) string {

	prefix := strs[0]

	for i := 1; i < len(strs); i++ {
		for j := 0; j < len(prefix); j++ {
			if len(strs[i]) <= j {
				prefix = prefix[:j]
				break
			}

			if prefix[j] != strs[i][j] {
				prefix = prefix[:j]
				break
			}
		}
	}

	return prefix
}

func main() {
	strs := []string{"dog", "racecar", "car"}

	result := longestCommonPrefix(strs)
	fmt.Println(result)
}
