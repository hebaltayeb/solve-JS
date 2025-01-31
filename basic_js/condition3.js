function toCamelCase(str) {
    return str
        .split(' ')         
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
        .join('');          
}


let input = "Coding Academy by Orange";
let output = toCamelCase(input);
console.log(output);