//Object is a Collection of Properties

let Person = {
    firstName :'Mr',
    lastName  :'John' ,
    age : 24,
    fullName : function(){
        console.log(this.firstName+this.lastName)
    }
}

console.log("Full Name : ",Person.fullName())
//with . notation
console.log("This is  Last Name : ",Person.lastName)

//with array notation
console.log("This is array notation : ",Person['lastName'])

//updating array
Person.firstName = 'Mr.Tim'
console.log("After Updating Array : ",Person.firstName)


//inserting new value
Person.gender = 'male'
console.log("The entire array : ",Person)

//delete an existing array from the array
delete Person.gender
console.log("After deleting Array : ",Person)


//checking key is in the obj or not
console.log(Person.gender in Person)

//checking with for loop
for (let key in Person){
   console.log( Person[key])
}