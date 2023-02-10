//display the even or odd by using the function

function checkEvenorOdd()
{
    var num1=43
    if(num1%2===0){
        document.write("number is even")
        console.log("number is even")
    }else{
        document.write("number is odd")
        console.log("number is odd")
    }
}

//wap whether the alpebet is vowel or consonent

var alfha="o"

if(alfha=="a"||alfha=="e"||alfha=="i"||alfha=="o"||alfha=="u"){
    console.log("alfhabet is vowel")
}
else{
    console.log("alfhabet is consonent")
}
//calling the function
function VowelorConsonent(){
    var let="m"
    if(let=="a"||let=="e"||let=="i"||let=="o"||let=="u"){
        console.log("letter is vowel")
    }
    else{
        console.log("letter is consonent")
    }
}
VowelorConsonent();

//wap to display the largest number

//we can also use or || to display
function largestnum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log("num1 is largest")
    }else if(num2>num1 && num2>num3){
        console.log("num2 is largest")
    }else{
        console.log("num3 is largest")
    }
}
largestnum(100,200,300);

//

function greeting(message1,name1)
{
    console.log("hello hi",message1,name1)
}
function getgreet(){
    return "good morning"
}

greeting(getgreet);    //function is also used as the arguments

let name1=getgreet()
greeting("pravalika",name1);

//calling the function inside the block of elements

function order(dress,message2){
    console.log("iam",dress,message2)
}
function delivery(){
    return "cash on delivery"
}
let message2=delivery()
order("ordered one dress on",message2);

//wap display the week days by using the swicth condition

function weekdays(){
let week=6;
switch(week){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednasday");
        break;  
        case 4:
        console.log("thusday");
        break;      
        case 5:
        console.log("friday");
        break;      
        case 6:
        console.log("saturday");
        break;      
        case 7:
        console.log("sunday");
        break;            
}
}
weekdays();