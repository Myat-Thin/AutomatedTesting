//Function is block of codes

//var --> global , functionally
//let --> global , block {}
//const --> can't be assigned new value

//create function with name
function add (a,b){
    return a+b
}

//call the created func
let sum= add(2,3)
console.log("Ordinary Func : ",sum)



//Function that doesn't have name --> Anonymus Function
let SumOfIntegers = function(c,d){
    return c+d
}


//Minimizing the above code
let minifunc = (c,d)=> c+d
console.log("minize func : ",minifunc(2,3))


//var example
//var --> global , functionally
    var greetingvar = "Good Morning"    

    //This is not function and assigned new value    
    if (1==1){
        var greetingvar = "Good Afternoon!"
    }
    console.log(greetingvar)

   //let example
   //let --> global , block {}
   let greetinglet = "Good Morning from let keyword!"

   //will not assigned the new value since it is only work in block
   if(1==1){
    let greetinglet = "Good Afternoon from let keyword!"
    console.log("Working in block : ",greetinglet)
   }
   console.log("Working from outside of the block : ",greetinglet)

   //const example
   //const --> can't be assigned new value
   const greetingconst = "Good Evening!"
  // greetingconst= "Good Night!"

   console.log("Greeting from Const : ",greetingconst)

   