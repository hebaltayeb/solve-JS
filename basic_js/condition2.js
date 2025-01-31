function switchCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}


let input = "OrAnGe";
let output = switchCase(input);
console.log(output); 