// function printvalue(i:string):string
// function printvalue(i:number):number

// function printvalue(i:any){
//     return i
// }

// console.log(9)
// console.log("TEST")

// function square(i:number):number
// function square(i:string):string

// function square(i:any){
//     if(i == "number"){
//        return i*2
//     }
//     return String(i*i)
// }

// console.log(square("5"))

// function ch(i:boolean):string
// function ch(i:number):string

// function ch(i:any){
//     if(typeof i == "boolean"){
//         return `Boolean received`
//     }
//     else{
//         return `Number recieved`
//     }
// }

// console.log(ch(true))



// function fin(i:number, j:number):number
// function fin(i:string, j:string): string

// function fin(i:any, j:any){
//     return i + j
// }
// console.log(fin("TEST",3))


// function sum3(i:string):string
// function sum3(i:string, j:number):string

// function sum3(i:any, j?:any){
//     if(j !== undefined){
//         return `${i} the age is ${j}`
//     }
//     else{
//         return i
//     }

// }

// console.log(sum3("TEST", 66))




// function login(username:string, Password:any):string
// function login(token:any): string

// function login(j:string,Y?:string,i?:string){
//     if(Y != null && i !== null){
//         return `This loin bu username and password`
//     }
//     else{
//         return `Token`
//     }
// }

// console.log(login('TEST', 'TEST'))




// function printvalue(i:number):boolean
// function printvalue(i:string):boolean

// function printvalue(i:any){
//     if(typeof i =="number"){
//         return true
//     }
//     else{
// return false
//     }
// }

// console.log(printvalue(30))
// console.log(printvalue("TEST"))



// function square(i:number):number
// function square(i:string):string

// function square(i:any){
//     if(typeof i == "number"){
//         return i*i
//     }
//     else{
//         return (Number(i) * Number(i)).toString()
//     }
// }


// console.log(square("30"))



// function sum(i:boolean):string
// function sum(i:number):string

// function sum(i:any){
//     if(typeof i == "boolean"){
//         return 'Boolean recived'

//     }
//     else{
//         return 'Number received'
//     }
// }

// console.log(sum(true))



// function sum(i:string,j?:number):string
// function sum(i:string, j:number):string


// function sum(i:string, j?:number){
// if(j == undefined){
//     return 'invalid'
// }
// else{
//     return 'valid'
// }
// }

// console.log(sum("TEST", 30))



// function info(name:string, dob?:number):string
// function info(name:string, dob:number):string


// function info(name:any, dob?:any){
//     if(dob == undefined){
//         return name
//     }
//     else{
//         return name + dob
//     }
// }
// console.log(info("TEST", 30))

// function sum(y:any,i:number):string
// function sum(y:any,i:string):string

// function sum(callback:(j:any)=>any, u:any){
//    return callback(u)
// }


// function sum3(i:any){
//     if(typeof i == "number"){
//         return `search by ${i}`
//     }
//     else{
//         return `search by {i}`
//     }
// }

// console.log(sum(sum3,"TEST"))


