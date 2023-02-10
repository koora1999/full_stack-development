//find the salary from the array whose valuse is 2000 and delete the 2000

//assignment

let array1=[1000,3000,4000,2000]
console.log(array1)
let check=array1.find(function(num){
    return num===2000;
    
})
console.log(check);
array1.pop();
console.log(array1);



//push and the pop methods
let array=[30,40,20,50,70]
array.push(60)
console.log(array);
//pop method
array.pop();
 console.log(array);
console.log(array.pop(5));
console.log(array);
//shift method
let number=[40,50,30,70,18]
number.shift();
console.log(number);

//unshift method
number.unshift(100,200)
console.log(number);
//declaring the variable

let a=number.shift();
let a1=number.shift();
console.log(a);
console.log(a1);
console.log(number);
//splice method

let marks=[100,200,300,400]
marks.splice(0,2);
console.log(marks);
marks.splice(0,4,500,600,100,400);
console.log(marks);

//findindex=is used to find the index values of the number
let age=[20,30,40,60,70]
let found= age.findIndex(function(item){
    return item===30;     
})
console.log(found);

//find = is used to find the number
let dob=[20,22,23,24,25]
let bday=dob.find(function(item){
    return item===23;
})
console.log(bday);

//filter = is used to apply the condition to the elements
let demo=[10,20,40,30,50,90]
let demo1=demo.filter(function(item){
    return item<80;//return item%2==0,return item>element,
})
console.log(demo1);
