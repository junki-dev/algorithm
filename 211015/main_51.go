package main

import (
	"fmt"
)

func allCase(chess [][]rune, row, n int, col, d1, d2 []bool, result *[][]string) {

	fmt.Println("1 --- ", chess, result)
	if row == n {
		var arr []string
		for _, val := range chess {
			arr = append(arr, string(val))
		}

		*result = append(*result, arr)
		return
	}

	for i := 0; i < n; i++ {

		idx1 := n - i + row
		idx2 := row + i
		fmt.Println("2 --- idx1, idx2, i, col, d1, d2 >>> ", idx1, idx2, i, d1, d2, col)
		if d1[idx1] || d2[idx2] || col[i] {
			continue
		}

		d1[idx1], d2[idx2], col[i] = true, true, true
		chess[row][i] = 'Q'
		fmt.Println("3 --- ", chess, result)
		allCase(chess, row+1, n, col, d1, d2, result)
		d1[idx1], d2[idx2], col[i] = false, false, false
		chess[row][i] = '.'
		fmt.Println("4 --- ", chess, result)
	}
}	

func solveNQueens(n int) [][]string {
	result := make([][]string, 0)
	columns := make([]bool, n)
	d1 := make([]bool, 2*n)
	d2 := make([]bool, 2*n)
	chess := make([][]rune, n)
	for i := 0; i < n; i++ {
		chess[i] = make([]rune, n)
		for j := 0; j < n; j++ {
			chess[i][j] = '.'
		}
	}

    allCase(chess, 0, n, columns, d1, d2, &result)

	return result
}

func main() {
	n := 4

    result := solveNQueens(n)
    fmt.Println("result >>> ",result)
}