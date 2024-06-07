
const addition=(a, b) => ((a*10) +(b* 10))/10;
const subtract=(a, b) => a-b;
const multiply=(a, b) => a*b;
const divide=(a, b) => a/b

const inputData2 =[];
const inputData =[];

function myValue(a) {
    inputData.push(a);
    let displayData = inputData.join('');
    console.log(inputData);
    document.getElementById('results2').innerHTML= displayData;
}

function addSign(inputData) {
  let inputNew = inputData.join('');
  inputData2.push(inputNew);
  document.getElementById("results1").innerHTML = inputNew;
  document.getElementById("operator").innerHTML = "+";
  document.getElementById('results2').innerHTML = "";
  inputData.splice(0, inputData.length);
  console.log(inputData2);
}


function subSign(inputData) {
    let inputNew = inputData.join('');
    inputData2.push(inputNew);
    document.getElementById("results1").innerHTML = inputNew;
    document.getElementById("operator").innerHTML = "-";
    document.getElementById('results2').innerHTML = "";
    inputData.splice(0, inputData.length);
  }
  function multSign(inputData) {
    let inputNew = inputData.join('');
    inputData2.push(inputNew);
    document.getElementById("results1").innerHTML = inputNew;
    document.getElementById("operator").innerHTML = "*";
    document.getElementById('results2').innerHTML = "";
    inputData.splice(0, inputData.length);
  }

  function divSign(inputData) {
    let inputNew = inputData.join('');
    inputData2.push(inputNew);
    document.getElementById("results1").innerHTML = inputNew;
    document.getElementById("operator").innerHTML = "/";
    document.getElementById('results2').innerHTML = "";
    inputData.splice(0, inputData.length);
  }

function reset() {
    document.getElementById('results2').innerHTML = " ";
    document.getElementById('results1').innerHTML = " ";
    document.getElementById('operator').innerHTML = " ";
    inputData.splice(0, inputData.length);
    inputData2.splice(0, inputData2.length);
}

function equals() {
    let x = document.getElementById('operator').innerHTML;
    console.log(x);
    if(x === "+") {
        console.log("add")
    }else if (x === "-") {
        console.log("minus");
    }else if ( x === "*") {
        console.log('multiply');
    } else if (x === "/") {
        console.log('divide');
    } else{
        console.log('error');
    }
}




