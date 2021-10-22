package main

import "fmt"

func spiralOrder(matrix [][]int) []int {

	result := []int{}
	colLen := len(matrix[0])
	rowLen := len(matrix)
	totalLen := rowLen * colLen
	left, right, up, down := 0, colLen - 1, 0, rowLen - 1

	for len(result) < totalLen {

		for i := left; i <= right && len(result) < totalLen; i++ {
			result = append(result, matrix[up][i])
		}

		for i := up + 1; i <= down - 1 && len(result) < totalLen; i++ {
			result = append(result, matrix[i][right])
		}

		for i := right; i >= left && len(result) < totalLen; i-- {
			result = append(result, matrix[down][i])
		}

		for i := down - 1; i >= up + 1 && len(result) < totalLen; i-- {
			result = append(result, matrix[i][left])
		}

		left++
		right--
		up++
		down--
	}

	return result
}

func main() {

	// matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9} }
	matrix := [][]int{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12} }
	result := spiralOrder(matrix)
	
	fmt.Println("result >>> ", result)
}