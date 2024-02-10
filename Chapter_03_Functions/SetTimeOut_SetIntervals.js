//Set time function : Function will run after "interval" of time.
//  setInterval : function repeats , starting after the
//the interval of time , then repeating...




//  setTimeout(function greeting() {
//     console.log("Hello World");
// }, 1000);

// setTimeout(greeting, 1000);


// function greeting(){
//     console.log("Welcome to the world of JS");
// }
// setTimeout(greeting, 1000);

function add(a,b){
    console.log(`The sum of a and b is  : ${a+b}`);
}
setTimeout(  function(){
     add(13, 12);
},1000 )


const WelcomeMessage=(name)=>{
      console.log(`Hello ${name} We warmly welcome to you here in JS.`);
}

( function(){
     WelcomeMessage("Ali")
}, 1000)