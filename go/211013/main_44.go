package main

import "fmt"

func isMatch(s string, p string) bool {

	if p == "*" {
		return true
	}

	curP, curS := 0, 0
	startIdx := -1
	match := 0

	for curS < len(s) {
		
		if curP < len(p) && (p[curP] == '?' || s[curS] == p[curP]) {
			fmt.Println("case1")
			curP++
			curS++
		} else if curP < len(p) && p[curP] == '*' {
			fmt.Println("case2")
			startIdx = curP
			match = curS
			curP++
		} else if startIdx != -1 {
			fmt.Println("case3")
			curP = startIdx +1
			match++
			curS = match
		} else {
			fmt.Println("case4")
			return false
		}

		fmt.Println("curP, curS, startIdx, match >>> ", curP, curS, startIdx, match)
	}

	for curP < len(p) && p[curP] == '*' {
		curP++
	}

	return curP == len(p)
}

func main_44() {
	s := "adceb"
	p := "*a*b"
	
	result := isMatch(s, p)
	fmt.Println(`result >>> `, result)
}