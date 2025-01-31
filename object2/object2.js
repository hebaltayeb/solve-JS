"use strict"
//task1
let data1 = {
    name: "Adam",
    age: 25,
    gender: "male"
};

let key = Object.keys(data1);
console.log(key);

//task2
let data2= {
    name: "Adam",
    age: 25,
    gender: "male"
};
let value = Object.values(data2);
console.log(value); 



//task3
let data3 = {
    name: "Adam",
    age: 25,
    gender: "male"
};
let entries = Object.entries(data3);
console.log(entries);



//task4
let object1 = { name: "Adam", age: 25 };
let object2 = { gender: "male" };
let mergedObject = Object.assign({}, object1, object2);

console.log(mergedObject); 


