let result = document.getElementById("inputtext")


function calculate(number){
    result.value += number
}

function equal(){
    try{
        result.value = eval(result.value)
    }
    catch(err){
          alert("enter the valid operation");
    }
}

function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1);
}
