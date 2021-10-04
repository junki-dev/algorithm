package main

import (
	"fmt"
	"sort"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {

	newNum := append(nums1, nums2...)

	sort.Ints(newNum)

	midNum := newNum[len(newNum)/2]
	midCount := 1
	if len(newNum)%2 == 0 {
		midNum += newNum[len(newNum)/2-1]
		midCount++
	}

	fmt.Println(midNum)
	result := float64(midNum) / float64(midCount)
	return result
}

func main() {
	nums1 := []int{1, 2}
	nums2 := []int{3, 4}
	result := findMedianSortedArrays(nums1, nums2)

	fmt.Println("result > ", result)
}
