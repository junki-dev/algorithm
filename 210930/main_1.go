package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverse(list *ListNode, start, end int) {
	fmt.Println("start - end : ", start, end)
	tmpInts := []int{}

	current := list
	for i := 0; i < end; i++ {
		if i < start {
			current = current.Next
			continue
		}

		if i > end {
			current = current.Next
			break
		}

		tmpInts = append(tmpInts, current.Val)
		current = current.Next
	}

	current = list
	count := 0
	for i := 0; i < end; i++ {
		if i < start {
			current = current.Next
			continue
		}

		if i > end {
			current = current.Next
			break
		}

		count++
		current.Val = tmpInts[len(tmpInts)-count]
		current = current.Next
	}

}

func reverseKGroup(head *ListNode, k int) *ListNode {

	if k < 2 {
		return head
	}

	start, end := 0, 0
	current := head

	for current != nil {

		end++

		if end%k != 0 {
			current = current.Next
			continue
		} else { // reverse 수행
			reverse(head, start, end)
			start = end
			current = current.Next
		}

	}

	test := head
	for test != nil {
		fmt.Println(test.Val)
		test = test.Next
	}

	return head
}

func main() {
	head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{Val: 5, Next: nil}}}}}
	k := 1

	result := reverseKGroup(head, k)
	fmt.Println("result >>> ", result)
}
