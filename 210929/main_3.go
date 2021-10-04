package main

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {

	if head == nil {
		return head
	}

	current := head
	flag := true
	for current.Next != nil {
		if flag {
			tmp := current.Val
			current.Val = current.Next.Val
			current.Next.Val = tmp
			flag = false
		} else {
			flag = true
		}

		fmt.Println("flag, currentVal ", flag, current.Val)
		current = current.Next
	}

	return head
}

func main() {
	head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: nil}}}}

	result := swapPairs(head)
	fmt.Println("result >>> ", result)
}
