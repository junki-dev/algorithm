package main

import (
	"fmt"
)

type ListNode struct {
    Val int
    Next *ListNode
}

func rotateRight(head *ListNode, k int) *ListNode {
	
	length := 0
	cur := head
	for cur != nil {
		length++
		cur = cur.Next
	}

	fmt.Println(length)

	return head
}

func main() {

	head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: nil}}}}
	k := 2

	result := rotateRight(head, k)
	fmt.Println("result >>> ", result)
}