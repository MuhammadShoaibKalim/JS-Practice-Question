


let myFriends = ["Aliya", "Sana",['shabana', 'Javeria' , ["Khadijah", ]],"Jabeen", "Habiba"];
let otherFriends = ['ali', "ahmad"];

// myFriends.push(otherFriends);
// console.log(myFriends[4]);


// const allFriends = myFriends.concat(otherFriends);
// console.log(allFriends);

// const allFriends = [...myFriends, ...otherFriends];  //ye spread kar deta h..
// console.log(allFriends);

// const friends = myFriends.flat(Infinity);
// console.log(friends);

// console.log(myFriends);



//Interview case 
//Ye data scrapping mein use hota h jb hum data diff format mein ata h.
//us mein liy rhy hoty h aur ye string, object etc .

console.log(Array.isArray("Sana"));  //false
console.log(Array.from ("Sana"));  //array of string bana dy ga
console.log(Array.from({name: "Sana"}));    // interesting


//agr hamry pas diff variable hote h to hum array mein convert kar sakte h.
let score1 =100;
let score2 =100;
let score3 =100;
console.log(Array.of(score1, score2, score3));  //[100, 100, 100]





