package main

import (
	"fmt"
	"sort"
)

func searchInsert(nums []int, target int) int {

	l := sort.Search(len(nums), func(i int) bool {
		return nums[i] >= target
	})

	return l
}

func main() {
	nums := []int{5, 7, 7, 8, 8, 10}
	target := 8

	result := searchInsert(nums, target)
	fmt.Println("result >>> ", result)
}
