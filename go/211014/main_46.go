package main

import "fmt"

func allCase(nums, perv []int, res *[][]int) {

	fmt.Println("nums >>> ", nums)
   if len(nums) == 0 {
      *res = append(*res, append([]int{}, perv...))
      return
   }
   for i := 0; i < len(nums); i++ {
	   fmt.Println("nums[:i] | nums[i+1:] | perv >>> ", nums[:i], nums[i+1:], perv)
      allCase(append(append([]int{}, nums[:i]...), nums[i+1:]...), append(perv, nums[i]), res)
	  fmt.Println("res >>> ", res)
   }
}

func permute(nums []int) [][]int {
   
   res := [][]int{}
   allCase(nums, []int{}, &res)

   return res
}

func main() {
   nums := []int{1, 2, 3}

   result := permute(nums)
   fmt.Println("result >>> ", result)
}