package main

import (
	"fmt"
)

type Roman struct {
	val int
	str string
}

func intToRoman(num int) string {

	roman := []Roman{{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"}, {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}}
	var romanNum string

	for _, rom := range roman {

		divNum := num / rom.val // 1
		if divNum == 0 {        // 해당 roman이 존재하지 않음
			continue
		}

		num -= divNum * rom.val // 994 (1 / 994)
		for i := 0; i < divNum; i++ {
			romanNum += rom.str
		}
	}

	return romanNum
}

func main() {
	num := 1994

	result := intToRoman(num)
	fmt.Println(result)
}
