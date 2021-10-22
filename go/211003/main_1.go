package main

import "fmt"

func search(nums []int, target int) int {

	l, r := 0, len(nums)-1

	for l <= r {

		if nums[l] == target {
			return l
		}

		if nums[r] == target {
			return r
		}

		mid := (l + r) / 2
		if nums[mid] == target {
			return mid
		}

		if nums[l] > nums[r] {
			l += 1
			r -= 1
		} else {
			if nums[mid] > target {
				r = mid - 1
			} else {
				l = mid + 1
			}
		}
	}

	return -1
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 6}
	target := 4

	result := search(nums, target)
	fmt.Println("result >>> ", result)
}

// 0 1 2 3 4 5 6
