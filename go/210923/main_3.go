package main

import (
	"fmt"
)


type ListNode struct {
	Val int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

	carry := 0
	head := new(ListNode)
	curr := head

	for l1 != nil || l2 != nil || carry != 0 {

		n1, n2 := 0, 0

		if l1 != nil {
			n1, l1 = l1.Val, l1.Next
		}
		
		fmt.Println("1 >>> ", n1, l1)
		if l2 != nil {
			n2, l2 = l2.Val, l2.Next
		}
		fmt.Println("2 >>> ", n2, l2)

		num := n1 + n2 + carry
		carry = num / 10
		curr.Next = &ListNode{num % 10, nil}
		curr = curr.Next

		fmt.Println("curr === ", curr)
		fmt.Println("----------------------")
	}

	fmt.Println("head : ", head.Next.Val)
	return head.Next
}

func main() {
	res := addTwoNumbers(
		&ListNode{Val: 2, Next: &ListNode{Val: 4, Next: &ListNode{Val: 3, Next: &ListNode{}}}},
		&ListNode{Val: 5, Next: &ListNode{Val: 6, Next: &ListNode{Val: 4, Next: &ListNode{}}}},
	)

	fmt.Println(res.Val, res.Next.Val, res.Next.Next.Val)
}