// function test(num:number,num3:number){
//     return num + num3
// }

// function operatio(ts:(i:number,j:number) => number,value1:number,Value3:number){
// return ts(value1,Value3)
// }

// console.log(operatio(test,6,6))

// function TEST(i:number,j:number){
//     return i + j
// }

// function TEST3(r:number,o:number){
//     return r - o
// }


// function op(perform:(p:number,u:number) => number, value:number, value3:number){
//     return perform(value,value3)
// }
// console.log(op(TEST3,10,10))


// function even(num:number){
//     if(num%2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function finsh(perfom:(i:number) => boolean, value:number){
//     return perfom(value)
// }
// console.log(finsh(even,63))

// let x:(n:number)=>number;

// function double(num:number){
//     return num * 2
// }

// x = double

// console.log(x(3))

// function processnum(callback:(Y:number)=> number, n:number){
//     return callback(n)
// }

// function numbe(u:number){
//     return u ** 2
// }

// console.log(processnum(numbe,3))


// function greet(callback:(name:string) => string, value:string){
//     return callback(value)
// }
// function print(name1:string){
//     return `Hello name1`
// }

// console.log(greet(print,"TESST"))


function getd(callback:(i:number,j:number)=>number, x:number,Y:number){
    return callback(x,Y)
    


    // add(i:number,j:number) => number, 10,30
    // return add(1,30)
}

function Add(c:number,b:number){
    return c + b
}
//console.log(add(10,20))
// function sub(num:number, n:number){
//     return num - n
// }

// function mul(f:number,h:number){
//     return f * h
// }
// mul(10,30)
// console.log(getd(mul,10,30))


// function getd(callback:(n:number)=> boolean, Y:number){
//     return callback(Y)
// }

// function square(i:number){
//     if(i % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(getd(square,10))



// function getd(callback:(i:number) => number|undefined,...TES:number[]){
//     for(let n of TES){
//         if(callback(n)!== undefined){
//             return callback(n)
//         }

    
//     }

// }
// // Perform(60)
// function Perform(number:number){
//    if(number > 50){
//     return number
//    }
//     }


// console.log(getd(Perform,30,30,60))



// function executeop(callback:(i:number) => number, j:number){
// return callback(j)
// }

// function double(y:number){
//     return y + y + 10
// }

// console.log(executeop(double,10))


// function test(callback:(string:string)=> string, y:string){
//  return callback(y)
// }

// function per(name:string){
//     return name
// }

// console.log(test(per,"Daniel"))


// function add(a:number, b:number){
//     return a + b
// }

// function sub(a:number, b:number){
//     return a - b
// }

// function perform(callback:(i:number,j:number)=> number, a:number, b:number){
//     return callback(a,b)
// }

// console.log(perform(sub, 30, 30))



// function iseven(i:number){
//     if(i%2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// function test(callback:(y:number)=>boolean, n:number){
//    return callback(n)
// }

// console.log(test(iseven,20))

// function odd(i:number){
//     if(i%2 !== 0){
//         return i
//     }
// }

// function execute(callback:(j:number)=> number|undefined, ...y:number[]){
//     for(let r of y){
//         if(callback(r)!== undefined){
//             return callback(r)
//         }
//     }
// }

// console.log(execute(odd,30,30,61))


// function greet(callback:(y:string)=> string, name:string){
// return callback(name)
// }

// function test(name:string){
//     return `Hello ${name}`
// }

// console.log(greet(test,"NUMBER"))



// function fun(callback:(num:number)=>number, ...i:number[]){
//     let result;
// for(let o of i){

//       console.log(callback(o))

// }
// }
// function exe(j:number){
//     let sum = 0
//     sum+= j
//     sum = j
//     return sum
    


// }
// fun(exe,5,5)



// function strlen(callback:(name:string) => string|undefined, ...str3:string[]){
// for(let i of str3){
//     if(callback(i) !== undefined){
//         console.log(callback(i))
//     }
// }
// }

// //str(name:string)
// //str (TEST)
// function str(name3:string){
// if(name3.length > 5){
//     return name3
// }
// }

// strlen(str,"TEST","TES", "TESTYY", "tyyttyuyyty")


// function num(...name:string[]){
// for(let i in name){
//     console.log(i)
// }
// }

// num("TEST", "RSHUL", "Karthick")


// 
// function exetwice(callback:(num:number)=> number, j:number){
// for(let i = 0; i <= 1; i++){
//     console.log(callback(j))
// }
// }

// function double(num3:number){
//     return num3 + num3
// }

// exetwice(double, 10)


