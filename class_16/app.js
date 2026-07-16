// console.log()
// alert()
// prompt()
// getDay()
// var a=new Date("30 june 2030");
// a.setMonth('7')
// console.log(a);
// function print(x,a){
// console.log(x + a);
// }
// var funcRetrun=print(5,2);//7
// print(5,1);//6
// var a=new Date()
// a.getDate()
// var a='hello world!';
// // console.log(a.lastIndexOf('h'));
// // console.log(a.slice(a.length-2,a.length-1));
// console.log(a.charAt(5));
// var a='this is an orange!';
// a=a.replaceAll('is','are');
// a=a.toUpperCase();
// console.log(a);


// var a=49.46; //number
// console.log(Math.round(a));
// var a= 3.10;
// a= 4.10;
// var a =Math.random()*100;
// a=Math.ceil(a);
// console.log(a);
// var jsGenerate = Math.ceil(Math.random()*10) ;
// var userInput = +prompt('enter any number b/w 1 to 10',jsGenerate);

// if (userInput === jsGenerate) {
//     console.log("win");

// }else if(userInput-1 ===jsGenerate || userInput+1 ===jsGenerate){
// console.log("very close but not win");

// }
// else {
//     console.log("lose");

// }

// var a=+prompt("enter any number",2);
// var num = "2.1";
// console.log(parseInt(num) + 1);
// var num =1;
// var num2=num++;
// console.log(+(1 + "2"));//12  22 //22  12 22 
// var num=12;
// console.log(num.toString());
// var a= 34.2235546;
// console.log(parseFloat(a.toFixed(3)));
// var currentDate=new Date();
// console.log(currentDate.getTime());//
// var time=new Date();

// var currentTime=new Date();

// console.log(currentTime.getTime()  - time.getTime());
// var  fifaWorldCup= new Date("June 30, 2035");
// var currentTime=new Date();

// var a=fifaWorldCup.getTime()
// var b=currentTime.getTime()

// var result=a-b;
// console.log(+(result/1000/60/60/24/365).toFixed(2));
// var currentTime=new Date();
// currentTime.setMonth(0)
// currentTime.setDate(1)
// console.log(currentTime);
// function test(){
// console.log("hello from function!");
// }
// console.log("hello from outside function!");
// function add(a,b){
//   var c=  a + b;
//     return c;
// }
// var functionReturn=add(5,5);
// console.log(functionReturn);
var b=30;//global var
function test(){
    // var b=20;//local var
    console.log( "inside func :" +b);
    

}
test()
console.log( "outside func :" +b);
