package main

import "fmt"

func trap(height []int) int {
    
	start := 0
	water := 0

	for start < len(height) {
		
		wall := start+1
		bowl_height := height[start]
		end := wall

		for wall < len(height) && height[wall] < height[start] {
			if height[wall] > height[end] {
				end = wall
			}
			wall++
		}

		if wall == len(height) {
			wall = end
		}

		if wall < len(height) {
			if height[wall] < height[start] {
				bowl_height = height[wall]
			}

			for i := start +1 ; i < wall; i++ {
				water += bowl_height - height[i]
			}
		}

		start = wall
	} 

	return water
}

func main_42() {
	height := []int{0,1,0,2,1,0,1,3,2,1,2,1}
	
	result := trap(height)
	fmt.Println(`result >>> `, result)
}