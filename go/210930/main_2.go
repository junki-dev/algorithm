package main

import (
	"fmt"
)

func removeDuplicates(nums []int) int {

	if len(nums) < 1 {
		return 0
	}

	var i, j int
	for j < len(nums) {
		if nums[i] == nums[j] {
			j++
		} else {
			nums[i+1] = nums[j]
			i++
			j++
		}
	}

	return i + 1
}

func main() {
	nums := []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}

	result := removeDuplicates(nums)
	fmt.Println("result >>> ", result)
}
