// This : is a special keyword used to access
// jb bhe koi changing karni ho in future  we can do easily all that .


let person= {
    name:"Ali",
    status :"single",
    age:30,
    address:"Township, Lahore",
    Education:"software engineer",
    all_details : function (){
         return `The name of person is ${this.name}, lives in ${this.address}, a ${this.age} year old  and a good ${this.Education} in career.`;
    }
}
console.log(person.all_details());


// return `The name of person is ${this.name}, lives in ${this.address}, a ${this.age} year old  and a good ${this.Education} in career.`;
//  return `The name of person is ${name}, lives in ${address}, a ${age} year old  and a good ${Education} in career.`;
