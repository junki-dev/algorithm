package main

import (
	"fmt"
	"sort"
)

func searchRange(nums []int, target int) []int {

	l := sort.Search(len(nums), func(i int) bool {
		return nums[i] >= target
	})

	if l >= len(nums) || nums[l] != target {
		return []int{-1, -1}
	}

	r := sort.Search(len(nums), func(i int) bool {
		return nums[i] >= target+1
	})

	return []int{1, r - 1}
}

func main() {
	nums := []int{5, 7, 7, 8, 8, 10}
	target := 8

	result := searchRange(nums, target)
	fmt.Println("result >>> ", result)
}
