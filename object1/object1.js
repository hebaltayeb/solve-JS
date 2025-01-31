"use strict"
//task1
let data = {
    name: "Adam",
    age: 25,
    gender: "male"
};

console.log(data.name, data.age, data.gender);  


//task2
let info = {
    name: "Adam",
    age: 25
};
info.gender = "male";
console.log(info);

//task3

let data1 = {
    name: "Adam",
    age: 25
};
data1["gender"] = "male";
console.log(data1); 


//task4
let data3 = {
    name: "Adam",
    age: 25
};
let nameValue = data3.name;
console.log(nameValue);

//task5
let data4 = {
    name: "Adam",
    age: 25
};


let naValue = data4["name"];
console.log(naValue);