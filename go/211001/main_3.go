package main

import (
	"fmt"
)

func findSubstring(s string, words []string) []int {

	result := []int{}
	totalWordsLen := len(words)

	if totalWordsLen == 0 {
		return result
	}

	sLen := len(s)
	eachWordsLen := len(words[0])

	wordsCountMap := map[string]int{}

	for _, word := range words {
		wordsCountMap[word]++
	}

	fmt.Println(wordsCountMap)
	for i := 0; i < eachWordsLen; i++ {
		start := i

		fmt.Println("----- i : ", i)
		for start+(totalWordsLen*eachWordsLen) <= sLen {
			sub := s[start : start+(eachWordsLen*totalWordsLen)]
			visited := map[string]int{}
			j := totalWordsLen

			fmt.Println("sub, visited, j >>> ", sub, visited, j)
			for j > 0 {
				subString := sub[eachWordsLen*(j-1) : eachWordsLen*j]
				visited[subString]++

				fmt.Println("subString, visited, wordsCountMap >>> ", subString, visited[subString], wordsCountMap[subString])

				if visited[subString] > wordsCountMap[subString] {
					break
				}

				j--
			}

			if j == 0 {
				result = append(result, start)
			}

			max := 1
			if j > max {
				max = j
			}

			start += eachWordsLen * max
		}
	}
	return result
}

func main() {
	s := "barfoothefoobarman"       // "wordgoodgoodgoodbestword"                   // barfoothefoobarman
	words := []string{"foo", "bar"} // {"foo", "bar"}

	result := findSubstring(s, words)
	fmt.Println("result >>> ", result)
}
