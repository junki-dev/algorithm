package main

import (
	"fmt"
)

func canJump(nums []int) bool {

	far := 0
	for i := 0; i < far + 1; i++ {

		fmt.Println("i , far, i + nums[i] >>> ", i, far, i + nums[i])
		if i == len(nums) - 1 {
			return true
		}

		if i + nums[i] > far {
			far = i + nums[i]
		}
	}

	return false
}

func main() {

	nums := []int{2,0,0}
	result := canJump(nums)
	
	fmt.Println("result >>> ", result)
}