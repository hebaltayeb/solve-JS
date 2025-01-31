"use strict"

/*let older60;
if(older>60){
    console.log("You are not eligible. You may join other programs");
}

let age=20;
if(older>=18 && older<60){
    console.log("You are eligible. Start your application");
}

let younge=15;
if(younge<18){
    console.log("You may join the kids' program.");
}

let older2=66;
if(older2>60){
    console.log("You may join the seniors’ program");
}*/


function checkEligibility(yearOfBirth) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;
    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18 && age <= 30) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}

checkEligibility(1995);


