package main

import (
	"fmt"
	"math"
)

type Area struct {
	w int
	h int
}

func maxArea(height []int) int {

	if len(height) <= 1 {
		return 0
	}

	start := 0
	end := len(height) - 1
	var max float64

	for start <= end {
		if height[start] < height[end] {
			max = math.Max(max, float64((end-start)*height[start]))
			start++
		} else {
			max = math.Max(max, float64((end-start)*height[end]))
			end--
		}
	}

	return int(max)
}

func main() {
	height := []int{1, 2, 1}

	result := maxArea(height)
	fmt.Println(result)
}
