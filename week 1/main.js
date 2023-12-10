// write a program that prints even number in an array.
let arr=[22,42,54,63,23,47,56,74,65,73,75];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

// write a program to print the biggest number in an array.
let max=0;
for(let i =0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log("max value in the aray is "+max);

// objects and arrays

// Write a program that prints all the male peoples first name given a complex object

const allUsers=[{fname:"yash",age:21,gender:"male"},{fname:"rawat",age:21,gender:"male"},{fname:"priya",age:21,gender:"female"}];
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["fname"]);
    }
}

//write a program to revere an array

let first=0;
let last=arr.length-1;
while(first<last){
    let temp=arr[first];
    arr[first]=arr[last];
    arr[last]=temp;
    first++;
    last--;
}
console.log(arr);

console.log(" ");
console.log("Functions");

 //functions 


//write a program to add two number using functions 
function sumOfTwo(numb1,numb2){
    return numb1+numb2;
}
let answer=(sumOfTwo(2,3));
console.log(answer);

//callbacks
console.log("callbacks");

function sum(num1,num2,fntocall){
    fntocall(num1 + num2);
}

function displayResult(data){
    console.log("sum is equal to "+data);
}

function displayresultpassively(data){
    console.log("sums result is "+ data);
}

const res=sum(1,2,displayresultpassively);



 