// class Animal{
//     constructor(name,color){
//         this.name=name
//         this.color=color
//     }
//  static run(){
//         console.log("runnig...");
        
//     }
//     walk(){
//         console.log("walking...");
//     }
//    get getColor(){
//         return this.color;
//     }
//     set setColor(v){
// if(v==='red'|| v==="pink"){
//     this.color=v;
// }
//     }
// }
// let animal_1=new Animal("lion","white");
// let animal_2=new Animal("cow","red");
// console.log(animal_1.getColor);

// console.log(animal_1);
// console.log(animal_2);
// animal_1.run()
// Animal.run()
// Animal.run()
// animal_2.walk();//
// animal_1.color="yellow";
// animal_1.setColor="red";
// console.log(animal_1.getColor);//
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
//     speak(){
//         console.log("speaking...");
        
//     }
// }
// class Student extends Person{
//     constructor(name,age,std_id){
//        super(name,age)
//         this.std_id=std_id
//     }
   
//    sum(a,b){
// return a+b
//    }
// }
// const p_1=new Person("hamza",20);
// const std_1=new Student("bilal",24,112);
// // console.log(std_1);
// // console.log(std_1.sum(5,15));
// // std_1.speak();
// console.log(p_1.speak());

// localStorage (no db)
// let arr=[1,2,3];


// function a(){
//     arr.push('34');
// }

// localStorage.setItem("item","product")
// const a={
//     name:'kaif'
// };
// localStorage.setItem("number",a);
// const obj={
//     name:"belal",
//     id:34
// }
// const b=JSON.stringify(obj);
// console.log(b);

// console.log(JSON.parse(b));
// localStorage.setItem("obj",JSON.stringify({name:'belal'}));
// console.log(JSON.parse(localStorage.getItem("obj")));
// localStorage.clear()

// let interval=setInterval(()=>{
//     console.log("hello world!");
    
// },1000)

// setTimeout(()=>{
//     console.log("time out!");
//     clearInterval(interval)
// },5000)
