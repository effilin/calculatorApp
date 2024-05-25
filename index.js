
const addition=(a, b) => ((a*10) +(b* 10))/10;
const subtract=(a, b) => a-b;
const multiply=(a, b) => a*b;
const divide=(a, b) => a/b


const numbers1 = [];

function value(a) {
    numbers1.push(a);
    const inputData = numbers1.toString();
    document.getElementById('results').innerText=inputData;
}
