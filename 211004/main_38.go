package main

import (
	"fmt"
	"strconv"
)

func countAndSay(n int) string {

	if n == 1 {
		return "1"
	}

	str := countAndSay(n - 1)

	var say string
	var count int

	for i := range str {
		count++
		if i == len(str)-1 || str[i] != str[i+1] {
			say += strconv.Itoa(count) + str[i:i+1]
			count = 0
		}
	}

	return say
}

func main() {

	n := 5
	result := countAndSay(n)
	fmt.Println("result >>> ", result)
}
