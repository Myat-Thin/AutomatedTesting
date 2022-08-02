// var mark = Array(6)
// var mark = new Array(1,2,3,4,5,6)
var mark = [1,2,3,4,5,6]
console.log("The 2nd index is ", mark[2])
mark[3]=40
console.log("The new Array is ",mark)
console.log("The length of Array is ",mark.length)

//adding new value in the end of array
mark.push(90)
console.log("After adding new value ", mark)

//removing the last index of the array
mark.pop()
console.log("After removing the last index ", mark)

//adding the new value at the beginning of the array
mark.unshift(18)
console.log("Adding new value at the beginning of the array ",mark)