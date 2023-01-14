function displayNum(num){
    result.value=result.value+num;
    // console.log(num);
}

function clearBox(){
    result.value="";
}

function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}

function removeLast(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}