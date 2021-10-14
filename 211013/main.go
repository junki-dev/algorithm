package main

import (
	"fmt"
	"math"
)

func jump(nums []int) int {
	
	jumps, curEnd, curFar := 0, 0, 0

	for i := 0; i < len(nums) - 1; i++ {
		curFar = int(math.Max(float64(curFar), float64(nums[i] +  i)))
		if i == curEnd {
			jumps++
			curEnd = curFar
		}
		fmt.Println("curCur, curFat >>> ", curEnd, curFar)
	}

	return jumps
}

func main() {
	nums := []int{2,3,1,1,4}
	
	result := jump(nums)
	fmt.Println(`result >>> `, result)
}