// aik array ko dusri kisi sy assign kar dety h
// tu kia ho ga agr kisi mein changing/modify karty h tu wo dusri py effect kary ga!!!

let arr=[1,3,4,6,7,8,5];
let getRef=arr;
 
getRef[4]="Ali";

console.log("The original array :",arr);
console.log("The new array : ", getRef);

console.log("--------------");

getValue=[...arr];

getValue[5]="Ahmad";
console.log("The original array :",arr);
console.log("The copy of array  :",getValue);


