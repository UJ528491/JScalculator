// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let number = [];
let operator = [];
let strNum = "";

const inputNum = document.querySelector(".calculator");
const display = document.querySelector(".display");
inputNum.addEventListener("click", setNumber);

function clear(){
  number = [];
  operator = [];
  displayNumber("0");
  strNum ="";
};
function plus(){
  number[0] += number.pop();
  displayNumber(number[0]);
  operator.pop();
}
function minus(){
  number[0] -= number.pop();
  displayNumber(number[0]);
  operator.pop();
}
function muti(){
  number[0] *= number.pop();
  displayNumber(number[0]);
  operator.pop();
}
function divi(){
  number[0] /= number.pop();
  displayNumber(number[0]);
  operator.pop();
}

function inputOp(value){
  if(strNum){
    const intNum = parseInt(strNum); 
    strNum="";
    number.push(intNum);
  }
  if(number.length == 1){
    operator.pop();
    operator.push(value);
    console.log(operator);
  } else if(number.length == 2){    
    switch(operator[0]) {
      case '+' :
        if (value ==  "*" || value == "/"){
          break;
        }
        plus();
        break;
      case '-' :
        if (value ==  "*" || value == "/"){
          break;
        }
        minus();
        break;
      case '*' :
        muti();
        break;
      case '/' :
        divi();
        break;
    }
    operator.push(value);
  } else if(number.length == 3) {    
    switch(operator[1]) {
      case '*' :
        number[1] *= number.pop();
        break;
      case '/' :
        number[1] /= number.pop();
        break;        
      }
      operator.pop();
      operator.push(value);
      displayNumber(number[1]);
      inputOp(value);
  }
}
function inputEq(){
  inputOp();
}
function inputC(value){
  clear();
}
function inputNumber(value){
  strNum = strNum + value;
  console.log(strNum);
  displayNumber();
}
function inputZero(value){
  if(strNum){
    inputNumber(value);
  }
}
function displayNumber(value){
  if(value){
    display.innerHTML = value;
  }else{

    display.innerHTML = strNum;
  }
}
function setNumber(event){
  const value = event.target.textContent;
  switch(value) {
    case '+':
    case '-':
    case '*':
    case '/':
      inputOp(value);
      break;
    case '=':
      inputEq(value);
      break;
    case 'C':
      inputC(value);
      break;
    case "0":
      inputZero(value);
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      inputNumber(value);
      break;
  }
}