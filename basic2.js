const flag = true

if (!flag)
{
    console.log("Condition is Correct")
}
else{
    console.log("Console is Incorrect")
}

let i=0
while(i>10){
    i++
    console.log("i value is "+i)
}

do{
    i++
    console.log(i)
}while(i<10);


let required = true
while(required){
    console.log(required)
    required = false
}


console.log("*************************")
let n=0
for (let k=1; k<=100 ; k++)
{
    if(k%2 == 0 && k%5==0){
        n++
        console.log(k)
        if (n == 3)
        break
    }
     
}