var merge = function(nums1, m, nums2, n) {

    nums1.splice(m, nums1.length - m)

    let i = 0
    let j = 0

    while (j < nums2.length) {
        if (!!nums1[i] || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j])
            j++
            i++
        } else {
            i++
        }
    }

    console.log(nums1)

};

// const nums1 = [4,5,6,0,0,0]
// const m = 3
// const nums2 = [1,2,3]
// const n = 3

// const nums1 = [2, 0]
// const m = 1
// const nums2 = [1]
// const n = 1

const nums1 = [4, 0, 0, 0, 0, 0]
const m = 1
const nums2 = [1, 2, 3, 5, 6]
const n = 5

merge(nums1, m, nums2, n)