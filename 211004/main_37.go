package main

import "fmt"

var nums = []byte{'1', '2', '3', '4', '5', '6', '7', '8', '9'}

func posible(board [][]byte, num byte, row, col int) bool {

	for i := 0; i < 9; i++ {
		if board[row][i] == num {
			return false
		}
	}

	for i := 0; i < 9; i++ {
		if board[i][col] == num {
			return false
		}
	}

	boxX := row / 3
	boxY := col / 3

	for i := 0; i < len(board)/3; i++ {
		for j := 0; j < len(board)/3; j++ {
			if board[boxX*3+i][boxY*3+j] == num {
				return false
			}
		}
	}

	return true
}

func solve(board [][]byte, row, col int) bool {

	if col == len(board) {
		row++
		col = 0
	}

	if row == len(board) {
		return true
	}

	if board[row][col] == '.' {
		for i := 0; i < len(nums); i++ {
			num := nums[i]
			if posible(board, num, row, col) {
				board[row][col] = num
				if solve(board, row, col+1) {
					return true
				}
				board[row][col] = '.'
			}
		}
	} else {
		if solve(board, row, col+1) {
			return true
		}
	}

	return false
}

func solveSudoku(board [][]byte) bool {
	return solve(board, 0, 0)
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

	result := solveSudoku(board)
	fmt.Println("result >>> ", result)
}
