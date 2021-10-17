package main

import "fmt"


func maxSubArray(nums []int) int {
	max, sum := nums[0], nums[0]

	for _, num := range nums[1:] {

		if sum < 0 {
			sum = num
		} else {
			sum += num
		}

		if max < sum {
			max = sum
		}
	}

	return max
}

func main() {

	nums := []int{-2,1,-3,4,-1,2,1,-6,5}
	result := maxSubArray(nums)
	
	fmt.Println("result >>> ", result)
}