// Day 06 11-04-2024

// filter-map-and-reduce

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ]

  const values = staffsDetails.forEach((element) => {
    // console.log(element);
    // return element;
  });
//   console.log(values);  //foreach return value undefined karta h...Remember

// console.log(staffsDetails.filter(element => element.age < 30));

// console.log(staffsDetails.map(element => element.salary));
// console.log(staffsDetails.reduce((acc, element) => acc + element.salary, 0));

// const result = staffsDetails.filter( (item)=> item.age==24);
// const result = staffsDetails.filter( ()=>);
// console.log(result);





//Map method
// The map() method is used for creating a new array from an existing one, 
// applying a function to each one of the elements of the first array.


// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled); // [2, 4, 6, 8]


//Filter methods
// The filter() method takes each element in an array and it 
// applies a conditional statement against it. If this conditional 
// returns true, the element gets pushed to the output array.
//  If the condition returns false, the element does not get pushed to the output array.



const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(item => item >= 2 );
// console.log(evens); // [2,3,4]

// const evens = numbers.filter((item) => {
//     return item >= 2  ; //agr asiy curely braces mein likhna h tu must to write return .
// } );
// console.log(evens); // [2,3,4]

// const students = [
//     { name: 'Quincy', grade: 96, from: "US" },
//     { name: 'Jason', grade: 84,from: "Uk" },
//     { name: 'Alexis', grade: 100, from: "CA" },
//     { name: 'Sam', grade: 85, from: "Uk" },
//     { name: 'Katie', grade: 90, from: "US" }
//   ];

//    const remarks = students
//              .filter( (item) => item.grade > 85 || students.from === "US")
//              .map((student) => student.name
//);
           // This will display the students name only who have grade greater than 85 and from US
//   console.log(remarks);
  


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNums = nums.map( (item) => item * 10 );
// const myNums2 = nums.map( (item) => item >= 5 ? item * 2 : item * 3);
// const myNums2 = nums
//          .filter( item => item>5 )
//          .map( item => item * 2
     
// );

// console.log(nums);

const myNums2 = nums
         .map( item => item * 2 )
         .map( item => item + 10)
         .filter( item => item > 20
    );

// console.log(myNums2);


//Reduce method
// The reduce() method reduces an array of values down to just one value.
// To get the output value, it runs a reducer function on each element of the array.


//   const number = [1,2,3,4,5];

//   const numList = number.reduce(
//     ( accumlator, currenValue) =>{
//        console.log(`currentValue: ${currenValue} and accumlator: ${accumlator}`);
//        return accumlator + currenValue;
//     }, 0);



// const number = [1,2,3,4,5];

// const numList = number.reduce(
//   ( accumlator, currenValue) =>  accumlator + currenValue
//   , 15);
//   console.log(numList);


//Ye humein aik add cart ki value di gai h tu ap sub ko add kis trah karty h.
var coursesDetails = [
    {
      id: 10,
      courseName: "JS",
      price: 4000,
    },
    {
      id: 11,
      courseName: "CPP",
      price: 4000,
    },
    {
      id: 12,
      courseName: "python",
      price: 5000,
    },
    {
      id: 13,
      courseName: "Java",
      price: 6000,
    },
  
  ];

  const total_Price = coursesDetails
           .reduce(  (acc, coursesDetail) => acc + coursesDetail.price, 0
            
                 )
                 console.log(total_Price);
