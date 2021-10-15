package main

import (
	"fmt"
	"sort"
)

func allCase(nums, perv []int, res *[][]int) {

	fmt.Println("nums >>> ", nums)
   if len(nums) == 0 {
      *res = append(*res, append([]int{}, perv...))
      return
   }

   for i := 0; i < len(nums); i++ {

	   fmt.Println("nums[:i] | nums[i+1:] | perv >>> ", nums[:i], nums[i+1:], perv)
      if i != 0 && nums[i] == nums[i-1] {
         continue
      }
      allCase(append(append([]int{}, nums[:i]...), nums[i+1:]...), append(perv, nums[i]), res)
      fmt.Println("res >>> ", res, i, nums)
   }
}

func permuteUnique(nums []int) [][]int {
    
   sort.Ints(nums)
   res := [][]int{}
   allCase(nums, []int{}, &res)

   return res
}

func main() {
   nums := []int{-1,2,-1,2,1,-1,2,1}

   result := permuteUnique(nums)
   fmt.Println("result >>> ", result)
}