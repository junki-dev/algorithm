package main

import "fmt"

func isValidSudoku(board [][]byte) bool {

	var x, y int

	for i := 0; i < 9; i++ {

		row := map[int]int{}
		col := map[int]int{}
		grid := map[int]int{}

		for j := 0; j < 9; j++ {

			if board[i][j] != '.' {
				row[int(board[i][j])]++
			}

			if board[j][i] != '.' {
				col[int(board[j][i])]++
			}

			if board[x][y] != '.' {
				grid[int(board[x][y])]++
			}

			if row[int(board[i][j])] > 1 || col[int(board[j][i])] > 1 || grid[int(board[x][y])] > 1 {
				return false
			}

			if j == 8 {
				if i%3 == 2 {
					fmt.Println("--- 1")
					y = 0
					x++
				} else {
					fmt.Println("--- 2")
					y++
					x -= 2
				}
			} else if y%3 == 2 {
				fmt.Println("--- 3")
				y -= 2
				x++
			} else {
				fmt.Println("--- 4")
				y++
			}

		}
	}

	return true
}

func main() {

	board := [][]byte{
		{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '3', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'}}

	result := isValidSudoku(board)
	fmt.Println("result >>> ", result)
}
