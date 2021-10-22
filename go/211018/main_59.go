package main

import (
	"fmt"
)

func generateMatrix(n int) [][]int {

	result := make([][]int, n)
    for i := 0; i < n; i++ {
		result[i] = make([]int, n)
	}

	up, down, left, right := 0, n - 1, 0, n - 1
	cur := 1

	for cur <= n * n {
		for i := left; i <= right && cur <= n*n; i++ {
			result[up][i] = cur
			cur++
		}
		up++

		
		for i := up; i <= down && cur <= n*n; i++ {
			result[i][right] = cur
			cur++
		}
		right--

		for i := right; i >= left && cur <= n*n; i-- {
			result[down][i] = cur
			cur++
		}
		down--

		for i := down; i >= up && cur <= n*n; i-- {
			result[i][left] = cur
			cur++
		}
		left++
	}

	return result
}

func main() {

	n := 3
	result := generateMatrix(n)
	fmt.Println("result >>> ", result)
}