//Async JS


// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//      console.log("Callback function called");
// }, 3000);

// console.log(4);
// console.log(5);

//call back function

// let todos= ()=>{
//   let request= new XMLHttpRequest();

//   request.addEventListener("readystatechange", ()=>{
     
//     if(request.readyState===4 && request.status==200)
//     {   
//         //console.log(request, readyState) 
//         console.log(request, request.responseText);
//     }
//     else
//     {
//         console.log(request.status);
//     }
//   })
//    //set up request
//    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  
//    //sending request
//    request.send();
// }

// todos();
  

let GetSomething = () => {
    return new Promise((resolve, reject) => {
        // resolve("GetSomething");
        // reject("reject");
    })
}

GetSomething().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

