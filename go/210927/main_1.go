package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {

	container := [][]int{}
	sort.Ints(nums)

	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		l, r := i+1, len(nums)-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			if sum < 0 {
				l++

			} else if sum > 0 {
				r--
			} else {
				container = append(container, []int{nums[i], nums[l], nums[r]})
				for l < r && nums[l] == nums[l+1] {
					l++
				}
				for l < r && nums[r] == nums[r-1] {
					r--
				}
				l++
				r--
			}
		}
	}
	return container
}

func main() {
	nums := []int{-1, -1, -1, -1}
	result := threeSum(nums)

	fmt.Println("result >>> ", result)
}
