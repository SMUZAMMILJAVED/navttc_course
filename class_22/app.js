// {
//     let a=1;
// }
// console.log(a);
// if(true){
//     var a=1;
// }
// a++;
// console.log(a);

// const a=20;
// {console.log(a);}//20
// a=10;
// console.log(a);

// var a;
// const a={
//     name:'kaif'
// };
// a.name=""
// console.log(a);

// const a=[0,1,2,3];
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
    
// }
// function print(a){
// console.log("hello " + a);

// }
// let square=a=>a**2;
    

// let returnOfFunction=square(2);
// console.log(returnOfFunction);
// const arr=[5,6,10,34];
// const [a,b,,c]=arr
// console.log(a,b,c);

// const obj = {
//     names : "Raj",
//     age : 25
// };

// const {names,age}=obj

// console.log(names);
// console.log(age);


// const a=[1,2,3,4];
// const b=[4,5,6,6];
// const merged=[...a,...b];
// console.log(merged);


// const a=[1,2];
// const b=[...a]; //deep clone
// b[0]++

// console.log(a);//[2,2]
// console.log(b);//[2,2]

// default parameters
// const print=(a=5,b)=>{
// console.log(a);

// }
// print()
// rest parameter 
// const add=(a,b,...c)=>{
//     let sum=1
//     for(let i=0;i<c.length;i++){
//     sum=sum*c[i]
//     }
// console.log(a+b+sum);

// }
// add(2,4,2,3,4,5,2,3)
// const a = [ "apple", "banana", "cherry" ];
// for(let fruit of a){
//     console.log(fruit);
    
// }
// let evens=["a","b",6,8,10]
// let odds=evens.map(v=>v+1);
// console.log(odds);
// console.log(evens);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr=arr.filter(v=>v%2===0
   
// //true

// )
// console.log(arr);
// class Student{
//     constructor(name,id){
// this.name=name,
// this.id=id
//     }
//     greet(){
//        console.log(this.name + " says hello!");
        
//     }
// }
// const std_1=new Student("hamza",12);
// const std_2=new Student('bilal',13);
// const std_3=new Student("kaif",14);
// console.log(std_1);
// console.log(std_2);
// console.log(std_3);
// std_1.greet()
class Person{
    
constructor(name,age){
    this.name=name;
     this.age=age
}
 walk(){
    console.log("walking...");
    
}
static test(){
    console.log("testing...");
    
}
get getAge(){
    return this.age
}
set setValue(data){
if(data>18){
    this.age=data
}else{
    return false;
}
}
}
// const obj=new Person('ahsan',12);
// // obj.setValue=19;
// // console.log(obj.getAge);


// // obj.walk()
// // Person.walk()
// // obj.test()
// // Person.test()
// console.log(obj.age);


// class Person{
//     constructor(name,id,age){
//         this.name=name;
//         this.id=id;
//         this.age=age;
//     }
//     speak(){
//         console.log("speaking...");
        
//     }
// }
// class Teacher extends Person{
// constructor(name,id,age,trianerId){
//        super(name,id,age)
//         this.trinerId=trianerId
//     }
// }
// class Student extends Person{
// constructor(name,id,age,stdId){
//        super(name,id,age)
//         this.stdId=stdId
//     }
// }
// const t_1=new Teacher('kaif',12,24,445);
// console.log(t_1);

// t_1.speak();