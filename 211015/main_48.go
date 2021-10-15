package main

import (
	"fmt"
)

func rotate(matrix [][]int)  {
    
	n := len(matrix)-1
	for x := 0; x < len(matrix) - 1; x++ {
		for  y := x; y < n - x; y++ {
			tmp := matrix[x][y]
			matrix[x][y] = matrix[n - y][x]
			matrix[n - y][x] = matrix[n - x][n - y]
			matrix[n - x][n - y] = matrix[y][n - x]
			matrix[y][n - x] = tmp
		}
	}
		fmt.Println("matrix  >>> ", matrix)
	
}

func main() {
	matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7 , 8, 9}}

    rotate(matrix)
    fmt.Println("result >>> ")
}