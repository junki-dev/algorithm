package main

import (
	"fmt"
	"math"
	"sort"
)

func insert(intervals [][]int, newInterval []int) [][]int {
    
	if len(intervals) < 1 {
		return [][]int{newInterval}
	}

	intervals = append(intervals, newInterval)
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	result := [][]int{}
	start, end := int(math.Pow(10, 4)), 0
	cur := 0

	for cur < len(intervals) + 1 {

		if intervals[cur][0] < start {
			start = intervals[cur][0]
		}

		if intervals[cur][1] > end {
			end = intervals[cur][1]
		}

		if cur == len(intervals) - 1 {
			result = append(result, []int{start, end})
			break
		} else if intervals[cur  + 1][0] > end {
			result = append(result, []int{start, end})
			start = intervals[cur + 1][0] 
			end = intervals[cur + 1][1]
		}

		cur++
		
	}

	return result
}

func main() {

	intervals := [][]int{{1,3},{6, 9}}
	newInterval := []int{2, 5}
	result := insert(intervals, newInterval)
	
	fmt.Println("result >>> ", result)
}
