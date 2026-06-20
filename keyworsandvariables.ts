// //Declaring the variable and printing the variable

// let naming:string = "Test"

// console.log(naming)

// let num:number = 60
// console.log(num)

// // reassining the variable value

// naming = "Test3"
// console.log(naming)

//constant

// const num3:number = 60
// console.log(num3)
// const num3 = 100

// // if we use contstant we cannot able to reassign the variable because it is constant value it is used when thge value is constant (Not changed)





// function sum(i:any,j:number,u:number):number
// function sum(i:any, j:string,u:string):string


// function sum(callback:(i:any,u:any)=>any,j:any,u:any){
// return callback(j,u)
// }

// function sum3(i:any,j:any){
// if(typeof i == 'number'){
//     return i*j
// }
// else return i+j
// }

// console.log(sum(sum3,'test','tuy'))



// function sum(callback:(i:number,j:number)=>number, y:number,u:number):number
// function sum(callback:(i:string,j:string)=>string,y:string,u:string):string


// function sum(callback:any,i:any,j:any){
//     return callback(i,j)
// }

// function sum3(j:any,u:any){
//     if(typeof j == 'number'){
// return j * u
//     }
//     return j+u
// }


// function sum6(j:any,u:any){
//     if(typeof j === 'number'){
//         return j - u
//     }
//     else{
//         return j+u
//     }
// }

// console.log(sum(sum6,60,60))


// function sum(i:number,j:number,u:number):number
// function sum(i:number,j:number):number

// function sum(i:number,j:number,u?:number){
//     if(u !== undefined){
// return i+j+u
//     }
//     else{
//         return i+j
//     }
// }

// console.log(sum(10,10,10))






function sum(i:number):number
function sum(i:string):number

function sum(i:any){
    if(typeof i == 'number'){
        return i**3
    }
    else{
        return i.length
    }
}

console.log(sum('testty'))