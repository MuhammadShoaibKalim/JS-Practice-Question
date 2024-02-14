//Events 
let elements=document.querySelector("li");
// console.log(elements);


elements.forEach(function(element) {

    element.addEventListener( "click",e=>{
        console.log("Button Clicked");
        console.log(e.target);
        e.target.style.textDecoration="line-through";

    
    })

    
});
