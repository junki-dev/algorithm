package main

import (
	"fmt"
)

type Roman struct {
	val int
	str string
}

func romanToInt(s string) int {

	var num int
	for i := 0; i < len(s); i++ {
		fmt.Println("i --- ", i, num)
		if s[i] == 'I' {
			if len(s) > i+1 && s[i+1] == 'V' {
				num += 4
				i++
				continue
			} else if len(s) > i+1 && s[i+1] == 'X' {
				num += 9
				i++
				continue
			}
			num += 1
		} else if s[i] == 'V' {
			num += 5
		} else if s[i] == 'X' {
			if len(s) > i+1 && s[i+1] == 'L' {
				num += 40
				i++
				continue
			} else if len(s) > i+1 && s[i+1] == 'C' {
				num += 90
				i++
				continue
			}
			num += 10
		} else if s[i] == 'L' {
			num += 50
		} else if s[i] == 'C' {
			if len(s) > i+1 && s[i+1] == 'D' {
				num += 400
				i++
				continue
			} else if len(s) > i+1 && s[i+1] == 'M' {
				num += 900
				i++
				continue
			}
			num += 100
		} else if s[i] == 'D' {
			num += 500
		} else if s[i] == 'M' {
			num += 1000
		}
	}

	return num
}

func main() {
	s := "IX"

	result := romanToInt(s)
	fmt.Println(result)
}
