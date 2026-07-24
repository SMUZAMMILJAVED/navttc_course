// function test(){
//     var a;
//     a=document.childNodes[0].childNodes[1].childNodes[0]
//     console.log(a);
    

// }
// std=["hamza",34,'example.com']
// std_2=[12,"bilal",'example.com']
// std_3=['abc.com',34,'kaif']
// std_1_name="kaif"
// std_1_id=12
// var std_1={
//     name:"kaif",
//     id:34,
//     isAlive:true,
//     hobbies:['coding','book reading','gaming'],
//     address:{streetNo:7,houseNo:10,block:['a','b','c',[1,2,{test:[{}]}]]}
// }
// std_1.name="hamza"//update
// std_1.email='example.com'//insert
// delete std_1.id;//delete
// // console.log(std_1.hobbies[std_1.hobbies.length-1]);//true
// // console.log(std_1.id);
// // console.log(std_1.address.houseNo);
// console.log(std_1);//read
// var obj={
//     name:'ahsan',
//     id:12,
//     square:function(num){
//         console.log(num**3);
        
//     }//method
// }
// obj.square(9);
// console.log(obj.test);

// var students=[{name:'bilal',id:1},{fullName:'shahzaib',id:2},{firstName:'maaz',id:3}];
// for(var i=0;i<students.length;i++){
// console.log(students[i].name,students[i].id);

// }

// function CreateObj(name,id){
// var obj={
// name:name,
// id:id
// }
// return obj;
// }
// var std_1=CreateObj("kaif",12);
// console.log(std_1);
// var std_1={
  
// }
// console.log(std_1.id);
// function Person(name,id){
// this.name=name;
// this.id=id
// }
// var std_1=new Person('ali',1);
// var std_2=new Person('bilal',2);
// console.log(std_1);
// console.log(std_2);
// function User(name,id,address){
// this.name=name;
// this.id=id;
// this.address=address

// }
// User.prototype.greet=function(){
//     console.log("hello form ",this.name);
    
// }
// var user_1=new User("kaif",12,'karachi');
// var user_2=new User("ahsan",14,'lahore');
// var user_3=new User("basit",15,'quetta');
// var user_4=new User("ahmer",16,'multan');
// var user_5=new User("bilal",17,'peshawar');
// var users=[user_1,user_2,user_3,user_4,user_5]
// for(var i=0;i<users.length;i++){
//     console.log(users[i]);
    
// }
// user_1.greet()
//premitive (copy by value)
// var a=1;
// var b=a;//1
// b=3
// console.log(a)
// console.log(b)


//non-premitive (copy by ref/address)

// var a=[1];
// var b=a;//[3]
// b[0]=3
// console.log(a)
// console.log(b)
// var obj={
//     num:2
// }
// var obj2=obj;//copy by ref
// obj2.num++;
// console.log(obj);
// console.log(obj2);
// console.log("num" in obj);//true
// console.log(window.location.href);
// try{
//    console.log("test"); 
// }catch(err){

// }

// // console.log("hello world!");
// {let a=4;
//     console.log(a);
    
// }

// es6 
// console.log(a);
// let a;
// const a=12;
// a=2
// console.log(a);
// const a=4;
// a=5;
// console.log(a);
