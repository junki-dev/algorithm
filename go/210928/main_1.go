package main

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

// n 4 > 1 2 3 5 6 7
// 1 2 3 4 5 6 7 | 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 | 1 2 3 4
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	back := head
	current := head

	for i := 0; i < n; i++ {
		current = current.Next
	}

	if current == nil {
		return head.Next
	}

	for current.Next != nil {
		current = current.Next
		back = back.Next
	}

	back.Next = back.Next.Next
	return head
}

func main() {
	head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{Val: 5, Next: &ListNode{Val: 5, Next: &ListNode{Val: 6, Next: &ListNode{Val: 7, Next: &ListNode{}}}}}}}}}
	n := 4
	result := removeNthFromEnd(head, n)

	fmt.Println("result >>> ", result)
}
