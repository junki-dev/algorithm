package main

import (
	"fmt"
"strings"
)

func lengthOfLastWord(s string) int {
    
	splitS := strings.Split(s, " ")
	
	for i := len(splitS) - 1; i >= 0; i-- {
		if len(splitS[i]) != 0 {
			return len(splitS[i])
		}
	}

	return 0
}

func main() {

	s := "luffy is still joyboy"
	result := lengthOfLastWord(s)
	fmt.Println("result >>> ", result)
}