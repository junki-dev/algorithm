package main

import (
	"fmt"
	"sort"
)

func fourSum(nums []int, target int) [][]int {
	result := [][]int{}
	sort.Ints(nums)
	sumMap := make(map[[4]int]struct{})

	for i := 0; i < len(nums); i++ {

		for j := i + 1; j < len(nums); j++ {

			l, r := j+1, len(nums)-1

			for l < r {
				sum := nums[i] + nums[j] + nums[l] + nums[r]
				arr := [4]int{nums[i], nums[j], nums[l], nums[r]}

				if sum < target {
					l++
				} else if sum > target {
					r--
				} else {
					if _, ok := sumMap[arr]; !ok {
						sumMap[arr] = struct{}{}
						result = append(result, []int{nums[i], nums[j], nums[l], nums[r]})
					}
					l++
				}
			}
		}
	}
	return result
}

func main() {
	nums := []int{1, 0, -1, 0, -2, 2}
	target := 0
	result := fourSum(nums, target)

	fmt.Println("result >>> ", result)
}
