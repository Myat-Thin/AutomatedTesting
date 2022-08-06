let day =  'Tuesday '
let Dlen= console.log(day.length)

//slicing String
//Output want to be 'Tue'
let sliceTest = console.log(day.slice(0,3))

let arr = console.log(day[1])

//splitting with keyword
let splitvar = day.split("s")
console.log("Splitted Days : ", splitvar)
console.log("Index one :" , splitvar[1])
console.log("Index zero : ",splitvar[0])
console.log("Before Removing White Space : ",splitvar[1].length)

//Removing white space

let rWhiteSpace = splitvar[1].trim()
console.log("After Removing White Space : ",rWhiteSpace.length)


//Converting String to Integer
let day1 = '27'
let day2 = '24'

//different between two string and converting string to Int
let diff = parseInt(day2)-parseInt(day1)
console.log(diff)

//converting Int to String
let st =diff.toString()
console.log(st)

//concating string
let q = day+ "is Funny day"
console.log(q)