package main

import "fmt"

func multiply(num1 string, num2 string) string {

	nums := make([]byte, len(num1) + len(num2))

	for i := len(num1) -1 ; i >= 0; i-- {
		for j := len(num2) - 1; j  >= 0; j-- {
			num := (num1[i] - '0')*(num2[j] - '0') + nums[i+j+1]
			nums[i+j], nums[i+j+1] = nums[i+j]+num/10, num%10
		}
	}
	
	for i := 0; i < len(nums);i++ {
		nums[i] += '0'
	}

	for idx, val := range nums {
		if val != '0' {
			return string(nums[idx:])
		}

	}

	return "0"
}

func main() {
	num2 := "34"
	num1 := "24"
	
	result := multiply(num1, num2)
	fmt.Println(`result >>> `, result)
}