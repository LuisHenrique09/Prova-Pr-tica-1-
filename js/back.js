var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType')
var resultType = document.getElementById('resultType')
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

if (inputTypeValue === "real" && resultTypeValue==="dolar"){
        result.value = Number(input.value) * 5;

}else if(inputTypeValue ==="real" && resultTypeValue==="euro"){
    result.value = Number(input.value) * 5,45;

}else if(inputTypeValue ==="real" && resultTypeValue==="libra"){
    result.value = input.value * 6,45;
}

}