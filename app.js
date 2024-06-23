function hello(){
    console.log("Hey, this is ritik dubey");
}

hello();
hello();
hello();
hello();
hello();
hello();
hello();
hello();
hello();

function printName(){
    console.log("ritik Dubey");

    console.log("SaloniDubey");
    console.log("ritika Dubey");
    console.log("prem Dubey");
}

printName();


function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("not Adult");
    }
}
isAdult();

function printPoem(){
    console.log("Twinkle Twinkle little star");
    console.log("Hpw I wonder what are you are");
    console.log("Like a diamond inthe sky");
}
printPoem();

function rollDice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();
rollDice();

rollDice();

rollDice();
rollDice();
rollDice();
rollDice();

function printName(name){
    console.log(name);
}
printName("Ritik Dubey");

function printInfo(name,age){
    console.log(`${name}' s age is ${age}.`);
}
printInfo("ritik Dubey",23);
printInfo("Upkar Dubey",16);
printInfo("Golu Dubey");
printInfo(16);

function sum(a,b){
    console.log(a+b);
}
sum(1,3);
sum(4,5);
sum(5,3);
sum(10,20);


function calcuAverage(a,b,c){
    let avg= (a+b+c)/3;
    console.log(avg);
}
calcuAverage(2,4,6);

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
// printTable(5);

// function sum(a,b){
//     return a+b;
// }
// let s=sum(3,4);
// console.log(s);

// function getSum(n){
//     let Sum=0;

//     for(let i=1; i<=n; i++){
//         Sum +=i;
//     }
//     return getSum;
// }


// let str=["hi", "hello", "bye", "!"];

// function concate(str){
//     let result=" ";

//     for(let i=0; i<str.length; i++){
//         result+=str[i];
//     }
//     return result;
// }

// let str=["Ritik", "Saloni", "love", "Eachother"];

// function additon(str){

//     let solution=" ";

//     for(let i=0; i<str.length; i++){
//         solution+=str[i];
//     }
//     return solution;
// }

// function multipleGreet(func, count) {
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet=function(){
//     console.log("hello");
// }
// multipleGreet(greet, 1000)

// function multipleWish(func, count){
//     for(let i=1; i<=count;i++){
//         func();
//     }

// }
// multipleWish(function(){ console.log("riya")}, 1000);

let odd= function(n){
    console.log(!(n%2==0));
}
 odd(5);

let even=function(n){
    console.log((n%2==0));
}
even(16);