//Day 03 10-04-2024



/*
agr arrow function ko smjhny k liy this ko smjhny  zarur h.... 
aur isy smjhny k liy object ana chiy aur 

*/

const user = {
    userName : " Jabeen ",
    id:134,
    getInfo: function(){
        console.log(`User name is ${this.userName} and  id ${this.id} is belong to this user. `);
        console.log(this);
    },

    
}

//  Ye context idh rka hi h.
// user.getInfo();
// user.userName = " Sara ";    
// user.getInfo(); 

// console.log(this);  //Q k browser stand alone so ye empty bracket dy ga.

/*
Jb hum this ko aik function k andar execute karein gy tu 
ye humein global value return kary ga hi kary sath mein 
aur bhe bahut kuch.
aur agr bahir kisi function k tu wo humein empty bracket dy ga

*/



// function thisKey(){
//         console.log(this);
// }
// thisKey();

//Arrow function syntax

// const arrowFun = () =>
// {
//     // console.log("This is arrow function");
//     return `This is arrow function`;
// }
// console.log(arrowFun());


//Implicit return
// const  arrowFun = () => console.log(`This is implicit return function`) ;
// arrowFun();  //Mean to say mujhy pata h ap kuch return karna chaty h.


//Agr apko object ko return karna h tu  👍

// const  arrowFun = () => console.log( id:123, name:"Jabee",) ;  //this is not correct way
const  arrowFun = () => console.log({ id:123, name:"Jabee",}) ;  //this is a correct way
arrowFun();


/*
Different way of using function:

myArray.forEach( function (){} ); classical function
myArray.forEach(  () =>{} ); arrow function
myArray.forEach(  () =>() ); arrow function


1. Arrow function
2. Normal function
3. Function expression
4. Anonymous function
5. Call back function
6. Event handler function
7. Method
8. Constructor function


1. Arrow function
   Arrow function syntax
   const  arrowFun = () => console.log(`This is implicit return function`) ;

2. Normal function
   Normal function syntax
   function normalFun(){
       
   }
  
3. Function expression
   Function expression syntax
   const arrowFun = () => console.log(`This is implicit return function`) ;

4. Anonymous function
   Anonymous function syntax
   (function (a) { return a + 100; });

*/

