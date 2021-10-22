package main

import (
	"fmt"
)

func removeElement(nums []int, val int) int {
	remainNum := 0
	if len(nums) < 1 {
		return len(nums)
	}

	i, j := 0, len(nums)
	for i < j {
		if nums[i] != val {
			i++
			remainNum++
		} else {
			nums[i] = nums[j-1]
			j--
		}
	}

	return remainNum
}

func main() {
	nums := []int{3, 2, 2, 3}
	val := 3

	result := removeElement(nums, val)
	fmt.Println("result >>> ", result)
}
