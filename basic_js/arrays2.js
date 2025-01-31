"use strict"
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
var fruit = ["banana", "apple", "orange", "watermelon"];


var fruit1 = ["banana", "apple", "orange", "watermelon"];
fruit1.pop();
console.log(fruit1);

var vegetables1 = ["carrot", "tomato", "pepper", "lettuce"]
vegetables1.shift();
console.log(vegetables1);

var fruit2 = ["banana", "apple", "orange", "watermelon"];
console.log(fruit2.indexOf("orange"));

var fruit3 = ["banana", "apple", "orange", "watermelon"];
fruit3.splice(4,0,"3");
console.log(fruit3);

var vegetables2 = ["carrot", "tomato", "pepper", "lettuce"]
console.log(vegetables2.length);

var vegetables3 = ["carrot", "tomato", "pepper", "lettuce"]
vegetables3.splice(4,0,"7");
console.log(vegetables3);

var fruit4 = ["banana", "apple", "orange", "watermelon"];
var vegetables4 = ["carrot", "tomato", "pepper", "lettuce"]
var arr=fruit4.concat(vegetables4);
console.log( arr);
arr.splice(4,2);
console.log( arr);
console.log( arr.reverse());
console.log( arr.join());


