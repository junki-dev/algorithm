package main

import (
	"fmt"
	"strconv"
)

func groupAnagrams(strs []string) [][]string {

	groups := map[string][]string{}

	for _, str := range strs {

		freqT := [26]int{}

		for _, s := range str {
			freqT[int(s) - 97]++
		}

		hashS := ""
		for _, f := range freqT {
			hashS += strconv.Itoa(f) + ","
		}

        hashS = hashS[:len(hashS)-1]

		if _, ok := groups[hashS]; ok {
			groups[hashS] = append(groups[hashS], str)
		} else {
			groups[hashS] = []string{str}
		}
	}

	result := [][]string{}
	for _, group := range groups {
		result = append(result, group)
	}

	return result
}

func main() {
	strs := []string{"bdddddddddd","bbbbbbbbbbc"}

    result := groupAnagrams(strs)
    fmt.Println("result >>> ",result)
}