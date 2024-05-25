
const addition=(a, b) => ((a*10) +(b* 10))/10;
const subtract=(a, b) => a-b;
const multiply=(a, b) => a*b;
const divide=(a, b) => a/b


const numbers1 = [];

function myValue(a) {
    numbers1.push(a);
    const inputData = numbers1.join('');
    console.log(inputData);
    document.getElementById('results').innerHTML=inputData;
}

 
function equals() {

    if( numbers1.includes("+")) {
        const additionIndex = numbers1.findIndex("+");
        let a = numbers1.slice(0, additionIndex).join('');
        let b = numbers1.slice(additionIndex + 1).join('');
        const addResult= addition(a, b);
         return document.getElementById('results').innerHTML=addResult; 
        
    }
    else if (numbers1.includes("-")) {
        const subIndex = numbers1.findIndex("-");
        let a = numbers1.slice(0, subIndex).join('');
        let b = numbers1.slice(subIndexIndex + 1).join('');
        const subResult = subtract(a, b);
        return document.getElementById('results').innerHTML=subResult; 
    }
    else if (numbers1.includes("*")) {
        const mulIndex = numbers1.findIndex("*");
        let a = numbers1.slice(0, mulIndex).join('');
        let b = numbers1.slice(mulIndex + 1).join('');
        const mulResult = multiply(a, b);
        return document.getElementById('results').innerHTML=mulResult; 
    }
    else if (numbers1.includes("/")) {
        const divIndex = numbers1.findIndex("/");
        let a = numbers1.slice(0, divIndex).join('');
        let b = numbers1.slice(divIndex + 1).join('');
        const divResult = divide(a, b);
        return document.getElementById('results').innerHTML=divResult; 
    }
    else {
        console.log( n/a);
    }
}
function reset() {
    document.getElementById('results').innerHTML = " ";
    const arrayElements = numbers1.length;
    numbers1.splice(0, arrayElements);
}

console.log(numbers1);
myValue(21);
myValue('+');
myValue(2);

