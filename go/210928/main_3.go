package main

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {

	mergeList := &ListNode{}
	result := mergeList

	for l1 != nil && l2 != nil {

		if l1.Val < l2.Val {
			mergeList.Next = l1
			l1 = l1.Next
		} else {
			mergeList.Next = l2
			l2 = l2.Next
		}

		mergeList = mergeList.Next
	}

	if l1 == nil {
		mergeList.Next = l2
	}

	if l2 == nil {
		mergeList.Next = l1
	}

	return result.Next
}

func main() {
	l1 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 4, Next: &ListNode{}}}}
	l2 := &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{}}}}
	result := mergeTwoLists(l1, l2)

	fmt.Println("result >>> ", result)
}
