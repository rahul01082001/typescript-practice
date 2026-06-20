

// function add(name:string):string{
//     return `Hello ${name}`
// }console.log(add('TEST'))


// function TEST(i:number, b:number){
//    return `${i} * ${b} = ${i * b}`
// }
// let n = 9
// for(let i = 1; i <= n; i++){
//     for(let b = i ; b<= i ; b++){
// console.log(TEST(i,b))
//     }}

// let n =3

// for(let i = 0; i <= n  ; i++){
//     for(let j = 1; j <= n-i; j++){

//         process.stdout.write(j.toString())
        
//     }
//     console.log()
// }

// let sum = "TET"
// let str:string = ""
// //let i = sum.length

// for(let i = sum.length-1; i <= sum.length && i >= 0; i--){
//     str += sum[i]; //str = str + sum[i]
// }
// console.log(str)
// if(sum === str){                                               
//     console.log("palindrome")
// }
// else{
//     console.log("not")
// // }

// let s = 'TEST'
// let n =  'SETT'

// for()

// function greet(name:string){
//     return `Hello ${name}`
// }
// console.log(greet("rahul"))


// function num(i:number){
//     return i**2

// }
// console.log(num(10))

// function iseven(num:number):boolean{
//     return num % 2 == 0
// }
// if(iseven(7)){
//     console.log('even')
// }
// else{
//     console.log('odd')
// }
// //iseven(7)

// function filar(i:number, j:number):void{
//     if(i > j){
//     console.log("i is larger")

// }
// else{
//     console.log("j is large")
// }
// }

// filar(10,60)

// if(filar(10,60) == true){
//     console.log("i is larger")

// }
// else{
//     console.log("j is large")
// }

// function totnum(num:number){
//     // let sum = num.toString()
//     // let sum3 = sum.length
//     // let count:number = 0;
//     for(let i = 1; i <= num; i++ ){
//         if(i%2 == 0){
//             continue
//         }
//          console.log(i)
//     }
// }
// totnum(10)

 //optional parameter


//  function sum(i:number, j?:number):number{
//     return i 
//  }

//  console.log(sum(1))

// default  parameter

 
// function sum(name:string, age?:number):string{
//     return `Hello ${name} your age is ${age}`
// }

// console.log(sum('TEST'))
// console.log()

// function TEST(...dob:number[]){
//     for(let i of dob){
//         if(i > 18){
// console.log(i)        
//   }

//     }

// }
// console.log(TEST(20,60,90))


// function TEST(name:string = "TEST", Dob?:string):string{
//   return `your ${name} is ${name} and dob ids ${Dob}`
// }
// console.log(TEST())

// function SUM(...num:number[]){
//     let sum3 = 0
// for(let i of num){

//   sum3+= i  // sum3 = sum3 + i
  
// }
// console.log(sum3)
// }

// SUM(30,60)

// function small(...numbers:number[]){
//   let sum = 0
//   //let sum3 = 0
//   for(let i of numbers){
//     //um3 =  i //sum3 = 19
//     if(i > sum) // 19 < 20
//       sum = i // sum = 20

//   }
//   for(let i of numbers){
//     if(i < sum){
//       sum = i
//     }
//   }

//   console.log(sum)
// }
// small(10,70,15)

// function finsmall(...numbers:number[]){
//   let fis = numbers[0]

//   for(let i of numbers){
//     if(i < fis){
//       fis = i
//     }
//   }
//   return fis
// }

// console.log(finsmall(10,60,30,90,130,6))

// function greet(name:string){
//   return `Welcome ${name}`
// }
// console.log(greet("TEST"))

// function sum(num:number){
//   return num**3
// }
// console.log(sum(3))

// function find(n:number):boolean{
//   if(n > 0){
//     return true
//   }
//   else{
// return false
//   }
// }

// console.log(find(60))

// function fin(i:number, j:number){
//   if(i > j){
//     return `${i} is greater`
//   }
//   else{
//     return `${j} is greater`
//   }
// }
// console.log(fin(30,60))

// function Default(name:string = "TEST"){
//   return name

// }
// console.log(Default("TET"))

// function caldis(Dis:number, price:number = 15,){
//   return price - Dis
// }
// console.log(caldis(6))


// function Fin(base:number, power:number = 3){
//   return base ** power
// }

// console.log(Fin(3))


// function STD(name:string, dob?:number){
//   return name + dob
// }
// console.log("TEST")


// let sum = function(){
//   return "Welcome"
// }

// console.log(sum())

// let sum = function(num:number,num1:number){
//   return num + num1
// }



// function TEST(tet:number){
//   return tet * 3
// }

// console.log(sum(6,6))
// console.log(TEST(sum))


//Arrow function

// let sum = () => {
//   console.log (`welcome`)
// }

// sum()


// let sum = (num:number, num3?:number) => {
//   if(num3 !== undefined){
//     console.log(num * num3)
//   }
//   else{
//     console.log("Invalid")
//   }
// }
// sum(10)

// function sum(i,j){
//   console.log(i +j)
// }

// function sum3(callback:number){
// callback(10,10)
// }      
// sum3(sum)               
                    
// function sum3(o:(a:number, b:number) => number ,a:number,b:number){
//   return o(a,b)

// }

// function sum1(a:number,b:number){
//   return a + b
// }

// function sum6(a:number, b:number){
//   return a - b
// }

// console.log(sum3(sum1,10,10))