//

//  Calculate_Age = function (currentYear)
// {
//    let age=currentYear-2008;
//    console.log(`Your age is ${age}`)
// }


// Calculate_Age(2024);


let person= {
     
    Calculate_Age : function (currentYear)
    {
       let age=currentYear-2008;
       console.log(`Your age is ${age}`)
       return age;
    }

}

console.log(` The current age : ${person.Calculate_Age(2024)} `);