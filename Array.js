// var mark = Array(6)
// var mark = new Array(1,2,3,4,5,6)
var mark = [1,2,3,4,5,6]


//slicing the array from the main array
submark = mark.slice(2,5) //index 5 will not be printed(it will only print index 2,3 and 4)
console.log("slicing array ", submark)

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


//checking the index of the array for given value
mark.indexOf(100)
console.log("Checking the index of the given value >>",mark)

//checking the given value is exist or not in the array

console.log("100 is existed in the array " ,mark.includes(1))
console.log("120 is not existed in the array ",mark.includes(120))



//Array with for loop
//sum all the elements from the array
let sum =0
for (let i=0; i < mark.length;i++){

    sum = sum + mark[i]
    
}
console.log("The total value of the array ", sum)


//reducing the complixity of code with 'reduce' method

let tmark =mark.reduce((summark,totalmark) => summark+totalmark,0)//sum is 0
console.log("Total mark >>",tmark)



//Array that want to filter even number only
let  scores = [2,4,6,8,3,10]
let newarray =[]
console.log("*********************")
for (let j=0; j< scores.length; j++){
    if (scores[j]%2 == 0)
    {
        newarray.push(scores[j]) 
    }
}
console.log("Filter Array is >>",newarray)


//using with 'Filter' Method
scorefilter = scores.filter(mscore=>mscore%2==0)
console.log("Score Filter List >>",scorefilter)


//map (change from one vale to another new value)

let mapArray =scorefilter.map(mpscore=>mpscore*3)
console.log("mapArray >>",mapArray)


//sum the multiplied numbers
let msum = mapArray.reduce((var1,var2)=> var1+var2,0)
console.log("M sum >>>",msum)


//minimizing the code for filter , map and reduce

    //declaring new variable
    let socres1 = [2,4,6,8,3,10]
    let values = socres1.filter(newscore=>newscore%2==0).map(mscore=>mscore*3).reduce((vreduce,vartotal)=>vreduce+vartotal,0)
    console.log("Total Value",values)