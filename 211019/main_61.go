package main

import (
	"fmt"
)

type ListNode struct {
    Val int
    Next *ListNode
}

func rotateRight(head *ListNode, k int) *ListNode {
	
	if head == nil || head.Next == nil || k == 0 {
		return head
	}

	length := 0
	cur := head
	for {
		length++
		cur = cur.Next
		if cur.Next == nil {
			cur.Next = head
			cur = cur.Next
			break
		}
	}
	fmt.Println("loop! length ", length)
	test1 := cur
	for i := 0; i <= length; i++ {
		fmt.Println(test1.Val)
		test1 = test1.Next
	}	
	fmt.Println("--------------------")
	// cutIdx := length - k
	// fmt.Println("cutIdx >>> ", cutIdx)
	for i := 0; i < k; i++ {
		for j := 0; j < length; j++ {
			cur = cur.Next
			fmt.Println("1 --- ", cur.Val)
		}
		fmt.Println("2 --- ", cur.Val)
	}

	test2 := cur
	for i := 0; i <= length; i++ {
		fmt.Println(test2.Val)
		test2 = test2.Next
	}	
	fmt.Println("=================================")


	head = cur
	for i := 0; i < length; i++ {
		cur = cur.Next
	}
	cur.Next = nil

	fmt.Println("head val >>> ", head.Next.Val)
	test3 := head
	for test3 != nil {
		fmt.Println(test3.Val)
		test3 = test3.Next
	}	

	fmt.Println("=================================")
	return head
}

func main() {

	// head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{Val: 5, Next: nil}}}}}
	// head := &ListNode{Val: 0, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: nil}}}
	head := &ListNode{}
	k := 0

	result := rotateRight(head, k)
	fmt.Println("result >>> ", result)
}