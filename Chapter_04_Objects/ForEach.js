//It is used for traversed over an array.

let myArray=[" ali ", " ahmad ", " Jabbar ", ];

// console.log(myArray.forEach(function(value, index, array){
//     console.log(value, index, array);
// }));


for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

console.log("---------");

myArray.forEach(function(element){
    console.log(element);
})