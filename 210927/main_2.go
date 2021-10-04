package main

import (
	"fmt"
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {

	sort.Ints(nums)
	closet := nums[0] + nums[1] + nums[2]

	for i := 0; i < len(nums); i++ {

		l, r := i+1, len(nums)-1

		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			if math.Abs(float64(sum-target)) < math.Abs(float64(closet-target)) {
				closet = sum
			}

			if sum < target {
				l++
			} else if sum > target {
				r--
			} else {
				return sum
			}
		}
	}

	return closet
}

func main() {
	nums := []int{0, 1, 2}
	target := 3
	result := threeSumClosest(nums, target)

	fmt.Println("result >>> ", result)
}
