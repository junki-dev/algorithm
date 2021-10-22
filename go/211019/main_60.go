package main

import (
	"fmt"
)

func getPermutation(n int, k int) string {

	factorial := make([]int, n + 1)
	number := make([]byte, n)
	ans := []byte{}
	factorial[0] = 1
	for i := 1; i <= n; i++ {
		factorial[i] = factorial[i - 1] * i
		number[i - 1] = '0' + byte(i)
	}
	fmt.Println("# factorial >>> ", factorial)
	fmt.Println("# number    >>> ", number)
	k--

	for i := 1; i <= n; i++ {
		index := k / factorial[n - i]
		ans = append(ans, number[index])
		k -= index * factorial[n - i]
		number = append(number[:index], number[index+1:]...)

		fmt.Println("number , ans >>> ", number, ans)
	}

	return string(ans)
}

/*
 *  index
 * 	  
 */

func main() {

	n := 3
	k := 3
	result := getPermutation(n, k)
	fmt.Println("result >>> ", result)
}