package main

import (
	"fmt"
)

func allCase(n, row int, result *int, diagonal1, diagonal2, columns []bool) {

	if row == n {
		fmt.Println("!!! result !!!")
		(*result)++
		return 
	}

	for i := 0; i < n; i++ {
		d1 := n - i + row
		d2 := row + i

		fmt.Println("0 --- d1, d2 >> ", d1, d2)
		if diagonal1[d1] || diagonal2[d2] || columns[i] {
			fmt.Println("<<< skip >>>")
			continue
		}

		diagonal1[d1] = true
		diagonal2[d2] = true
		columns[i] = true
		fmt.Println("1 ----- diagonal1, diagonal2, columns >> ", diagonal1, diagonal2, columns)
		allCase(n, row + 1, result, diagonal1, diagonal2, columns)
		fmt.Println("2 ----- diagonal1, diagonal2, columns >> ", diagonal1, diagonal2, columns)
		
		diagonal1[d1] = false
		diagonal2[d2] = false
		columns[i] = false
	}

	fmt.Println(">>> row end <<< ")
}

func totalNQueens(n int) int {
	result := 0
	diagonal1 := make([]bool, n*2)
	diagonal2 := make([]bool, n*2)
	columns := make([]bool, n)

	allCase(n, 0, &result, diagonal1, diagonal2, columns)

	return result
}

func main() {

	n := 4

    result := totalNQueens(n)
    fmt.Println("result >>> ",result)
}