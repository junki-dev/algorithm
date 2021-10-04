package main

import (
	"fmt"
	"sort"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {

	nums := []int{}
	for _, list := range lists {
		for list != nil {
			nums = append(nums, list.Val)
			list = list.Next
		}
	}

	sort.Ints(nums)

	head := &ListNode{}
	sortList := head
	for _, num := range nums {
		sortList.Next = &ListNode{Val: num}
		sortList = sortList.Next
	}
	return head.Next
}

func main() {
	lists1 := &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: nil}}}
	lists2 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 5, Next: nil}}}

	var lists []*ListNode = []*ListNode{lists1, lists2}

	result := mergeKLists(lists)
	fmt.Println("result >>> ", result)
}
