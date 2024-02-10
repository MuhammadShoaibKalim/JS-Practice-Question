//Object is data structure used to store collection 
// of key value values .

var man = {
    name :"ali",
    age :30,
    status:"single",
    address:"Township, Lahore",

    Intro : function (name, address, age){
         console.log(` My name is ${name}, I'm ${age} years old and I live in ${address}.`);
    }
}


man.Intro("ali",  "Lahore ",30 );