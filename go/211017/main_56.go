package main

import (
	"fmt"
	"math"
	"sort"
)

func merge(intervals [][]int) [][]int {
    
	if len(intervals) == 1 {
		return intervals
	}

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	result := [][]int{}
	start, end := int(math.Pow(10, 4)), 0

	cur := 0

	for cur < len(intervals) {

		if intervals[cur][0] < start {
			start = intervals[cur][0]
		}

		if intervals[cur][1] > end {
			end = intervals[cur][1]
		}

		fmt.Println("1 --- start - end, cur >>> ", start, end, cur )
		if cur == len(intervals) - 1 {
			result = append(result, []int{start, end})
		} else if intervals[cur + 1][0] > end || cur == len(intervals) -1 {
			result = append(result, []int{start, end})
			start = intervals[cur + 1][0]
			end = intervals[cur + 1][1]

			fmt.Println("result >>> ", result)
		}

		cur++
		fmt.Println("2 --- start - end, cur >>> ", start, end, cur )
	}
	
	return result
}

func main() {

	intervals := [][]int{{1,4},{0, 0}}
	result := merge(intervals)
	
	fmt.Println("result >>> ", result)
}
