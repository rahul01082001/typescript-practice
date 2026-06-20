
//for loop

/* let n = 10

for(let i = 0; i <= n; i++){
    if(i % 2 != 0){
        process.stdout.write(i + " ");

    }
} */


//while loop

// let i =1

// while(i < 10){
//     console.log(i)
// i++
// }


//do - while

// let i = 1
// let n = 10
// do{
//     console.log(i)
//     i++
// }

// while(i >= n)

// let sum1 = 50
// //let sum3 = 5

// for(let i = 5; i <= sum1; i++ ){
//     if(i%5==0 ){
//         console.log(i)
//     }
// }

// let sum1 = 20
// let sum3=0

// for(let i = 0; i <= sum1; i++){
//     if(i % 2 == 0){
//         sum3+= i // sum3 = sum3 + i 
//     }
   
// }
// console.log(sum3)

// let sum1 = 20
// let sum3 = 1

// for(let i= 1; i <=sum1; i++){
//     if(i%2 != 0){
//         sum3+= i //sum3 = sum3 +i
//     }
// }
// console.log(sum3)


// let sum1 = 7
// let n = 10

// for(let i = 1; i <=n; i++){
//     console.log(`${sum1} * ${i} = ${sum1 * i}`)
// }

// let num=100

// for(let i=1;i<=num;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }

// }


// let sum1 = '12346'
// let sum3 = 0


// for(let i = 1; i <= sum1.length; i++){
// sum3+= 1 // 0+1
// }
// console.log(sum3)

// let sum3 = 22346
// let count = 0
// for(let i = sum3; i > 0; i = Math.floor(i/10)){
//     count++
// }
// console.log(count)



// let sum = 10
// let i = 1 ;
// let sum3 = 0
// while(i <= sum){
// sum3+= i //sum3 = sum3 + i
// i++
// }
// console.log(sum3)

// let sum = 6
// let i = 1
// let sum3 = 1

// while(i <= sum){
//     sum3*= sum 
//     i++  //sum3 = sum3 + sum
// }
// console.log(sum3)

// let sum = 123456
// let sum3 = sum.toString()
// let i = sum3.length - 1

// while(i <= sum3.length && i >= 0){
//     Process.stdout.write(sum3[i].toString())
//     i--

// }
// 5 <= 6

// let sum = 1326789
// let sum3 = sum.toString()
// let i = 0
// let count = 0

// while(i <= sum3.length-1){
// if (Number(sum3[i]) > count){
//     count = Number(sum3[i])
    
// }
// i++

// }
// console.log(count)         



// let sum1 = 123
// let sum3 = sum1.toString()
// let i = sum3.length - 1
// let digit;

// while(i <= sum3.length && i >= 0){
//     let digit = (Number(sum3[i]))
//     i--
// }
// if(sum1 == digit){
//     console.log("Palindrome")
// }
// else{
//     console.log("not palindrome")
// }



// let sum1 = 'MALAYALAM'
// //let sum3 = sum1.toString()
// let i = sum1.length - 1
// let reversed = "";

// while(i <= sum1.length && i >= 0){
//     reversed+= sum1[i]
//     i--
// }
// if(sum1 == reversed){
//     console.log("Palindrome")
// }
// else{
//     console.log("not palindrome")
// }




// let sum1 = 121
// let sum3 = sum1.toString()
// let i = sum3.length - 1
// let reversed:string = "";

// while(i <= sum3.length && i >= 0){
//     reversed+= sum3[i]
//     i--
// }

// if(sum1 == Number(reversed)){
//     console.log("Palindrome")
// }
// else{
//     console.log("not palindrome")
// }
//import promptSync from "prompt-sync";

// const prompt = promptSync();

// let n = Number(prompt("Enter your choice: "))
// let i = 1


// do{
//     console.log(i)
//     i++
// }

// while(i <= n)

// const prompt = require("prompt-sync")();
// let choice;


// do{
//     let num1 = Number(prompt("Enter NUM1: "));
// let num3 = Number(prompt("Enter NUM2: "));

//     console.log("1. Addition")
//     console.log("2.Subraction")
//     console.log("3. Multiply")

//  choice = Number(prompt("Enter the choice : "))

// switch(choice){
//     case 1:
//         console.log(num1 + num3)
//         break;
//     case 2:
//         console.log(num1-num3)
//         break;
//     case 3:
//         console.log(num1*num3)
//         break;
//     case 6:
//         console.log("exist")
//         break;
//     default:
//         console.log("in")
//         break;
// }
// }
// while(choice != 6)





// let n = 10

// for(let i = 1; i <=n; i++){
//     if(i%2 == 0){
//     continue
//     }
//     console.log(i)
// }

// let n = 30
// let i = 1

// while(i <= n){
// if(i%5 == 0){
//     i++
//     continue
    
    
// }

// console.log(i)
// i++
// }




// let sum = 10
// let sum1 = 30
// let sum3;
// sum3 = sum
// sum = sum1
// sum1 = sum3

// console.log(`sum = ${sum}`)
// console.log(`sum1 = ${sum1}`)


// sum = sum1
 