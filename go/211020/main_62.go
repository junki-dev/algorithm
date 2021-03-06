package main

import (
	"fmt"
)

func uniquePaths(m int, n int) int {
    grid := make([][]int, m)
	for i := range grid {
		grid[i] = make([]int, n)
		grid[i][0] = 1
	}

	
	for i := range grid[0] {
		grid[0][i] = 1
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
		}
	}

	return grid[m-1][n-1]
}

func main() {
	m := 3
	n := 7

	result := uniquePaths(m, n)
	fmt.Println("result >>> ", result)
}