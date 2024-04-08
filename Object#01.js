


/*

*/


//Object singleten/constructor

// const fbUser = new Object();
// const fbUser = {};

// fbUser.name = 'Jabeen';
// fbUser.id = 123456;
// fbUser.logedIn = false;

// fbUser.address.city = "Lahore";
// fbUser.address.stats = "Punjab";
// console.log(fbUser);

//Merging object

// const fbUser1 = {
//     name: 'Jabeen',
//     id: 123456,
//     logedIn: false,
//     address: {
//         city: "Lahore",
//         stats: "Punjab"
//     }
// }

// const fbUser2 = {
//     name: 'Aliya',
//     id: 8563,
//     logedIn: true,
//     address: {
//         city: "Gujjarah wala",
//         stats: "Punjab"
//     }
// }


// const fbUser3 = {fbUser1,fbUser2};
// const fbUser3 = {...fbUser1,...fbUser2};
// const fbUser3 = Object.assign({},fbUser1,fbUser2);
// console.log(fbUser3);   

const fbUser1 = {a:1,b:2};
const fbUser2 = {a:2,b:3};

// const fbUser3 = Object.assign({},fbUser1,fbUser2);
// console.log(fbUser3 === fbUser2);

// const fbUser3 = {...fbUser1, ...fbUser2};
// console.log(fbUser3);   



const user = [
 {
        name :"Haniya ",
           id:1245,
    } ,
   {
        name :"Jabeen ",
           id:897,
    } ,
    {
        name :"Aliya ",
           id:1789,
    } ,
]


console.log(user[2].id);
console.log(user[3]?.id); // undefined jb exist hi nhe karti na kaisy output mein mily gi.
