package main

import (
	"fmt"
)

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    
	row := len(obstacleGrid)
	col := len(obstacleGrid[0])

	if obstacleGrid[0][0] == 1 || obstacleGrid[row-1][col-1] == 1 {
		return 0
	}

	flag := 1
	for i := range obstacleGrid {
		if obstacleGrid[i][0] == 1 {
			obstacleGrid[i][0] = 0
			flag = 0
		}
		obstacleGrid[i][0] = flag
	}

	flag = 1
	for i := 1; i < col; i++ {
		if obstacleGrid[0][i] == 1 {
			obstacleGrid[0][i] = 0
			flag = 0
		}

		obstacleGrid[0][i] = flag
	}

	fmt.Println(obstacleGrid)

	for i := 1; i < row; i++ {
		for j := 1; j < col; j++ {
			if obstacleGrid[i][j] == 1 {
				obstacleGrid[i][j] = 0
				continue
			}

			obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]

		}
	}


	return obstacleGrid[row-1][col-1]
}

func main() {
	// obstacleGrid := [][]int{{0, 0, 0}, {0, 1, 0}, {0, 0, 0}}
	obstacleGrid := [][]int{{0, 0}, {1, 1}, {0, 0}}

	result := uniquePathsWithObstacles(obstacleGrid)
	fmt.Println("result >>> ", result)
}