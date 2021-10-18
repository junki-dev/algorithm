package main

import (
	"fmt"
)

func getPermutation(n int, k int) string {
	nums := []int{}

	for i := 0; i < n; i++ {
		nums = append(n,, i+1)
	}

	return allCase(n, k, 0, nums)
}

func main() {

	n := 3
	k := 3
	result := getPermutation(n, k)
	fmt.Println("result >>> ", result)
}