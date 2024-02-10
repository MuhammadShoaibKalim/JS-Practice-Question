


const lowerCase=(str)=>{
    return str.toLowerCase();
};
const upperCase=(str)=>{
    return str.toUpperCase();
};

const toUpperCase=(str,fn)=>{
  return fn(str);
}

console.log(toUpperCase('hello', upperCase));


//IIFE


(function(name){
   console.log(`hello ${name}`)
})("Ali");
