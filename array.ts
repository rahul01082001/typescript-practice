// //Method 1 to initilize the array

// let name1:string[] = []

// name1[0] = 'TEST'
// name1[1] = "TEST60"

// //Method 2 to initilize the array -- this is proffesional


// let name3:string[] = ["test","TEST30"]

//Method 3 to initilize the array -- Here we can assign mupltiple datatypes

// let imp:Array<string> = ['TEst','t','T']
// let imp1:Array<number> = [3,6,9]
// let imp3:Array<string|number> = ["TEST",6,9]


// for(let i of imp3){
//     if(typeof i == 'number'){
//         console.log(i)
//     }
// }

function imp(ele:number,y:number[]):boolean{
    for(let i of y){
        if(i == ele){
return true
        }
    }
            return false
        
    }


let num:number[] = [10,30,60]

console.log(imp(30,num))