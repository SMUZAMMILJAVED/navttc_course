// var a;//undefined
// function add(){
//  a=10;
// console.log(a);//10
// a=30
// a=1;
// }
// add()
// console.log(a);//1
// var abc=10;
// function test(){
//      abc=30;
//     console.log(abc);//30
//     abc=11;
//     console.log(abc);//11
    
// }
// // test();
// console.log(abc);//11 
//  var abc=10;
// function test(){
//     console.log(abc);//undefined
//     abc=12
//    console.log(abc);//12
//    var abc;
   
// }
// test();
// console.log(abc);//10

// console.log(a);

// var a;
// test()
// function test(){
//     console.log("hello wordl!");
    
// }

// var day="sat"
// switch(day){
// case 'sat':
//     console.log("holiday day");
//     break;
// case "sun":
//     console.log("holiday");
//     break;
//  case "mon":
//     console.log("working day");
//     break;
//  case "fri":
//     console.log("working day : friday");
//     break;
// default:
//     console.log("invalid!");
      
// }



// var days=['sun','mon','tues','wed','thurs','fri','sat']
// var time=new Date();
// var day=days[time.getDay()];
// switch(day){
// case 'sat':
//     console.log("holiday day");
//     break;
// case "sun":
//     console.log("holiday");
//     break;
//  case "mon":
//     console.log("working day");
//     break;
//  case "fri":
//     console.log("working day : friday");
//     break;
// default:
//     console.log("invalid!");
      
// }


// var i = 0;
//  do {
//  alert(i);
//  i++;
//  } while (i <= 3);
/*var i=0;
do{
console.log(i,"test");*/
// i++;
// }while(i>10)//false
// function test(a){
   
//     console.log("hello "+a);
    
    
// }
// function changeColor(){
//   var a=  document.getElementById("input1");
//   a.className="red"
  
// }
// function changeBg(){
// var a=document.getElementById("h_1");
// a.className+=" red"
// }

// var a=2;
// a+=3;
// console.log(a);

function getValue(){
    var a=document.getElementById('input_1');
    console.log(a.value);
    
}

function setValue(){
    var a=document.getElementById('input_1');
    a.value="hello world!"
    
}