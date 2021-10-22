package main

import (
	"fmt"
	"sort"
)

func nextPermutation(nums []int) {

	if len(nums) < 2 {
		return
	}

	minIndex := -1
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] < nums[i+1] {
			minIndex = i
		}
	}

	fmt.Println("min > ", minIndex)
	if minIndex == -1 {
		sort.Ints(nums)
		fmt.Println("case1 >>", nums)
		return
	}

	maxIndex := len(nums) - 1
	for i := minIndex + 1; i < len(nums); i++ {
		if nums[minIndex] < nums[i] {
			maxIndex = i
		}
	}

	// swap
	tmp := nums[minIndex]
	nums[minIndex] = nums[maxIndex]
	nums[maxIndex] = tmp

	fmt.Println("min, max, nums ", minIndex, maxIndex, nums)
	sort.Ints(nums[minIndex+1:])
	fmt.Println(nums)

	return
}

func main() {
	nums := []int{3, 2, 1}

	nextPermutation(nums)

	fmt.Println("result >>> ")
}
