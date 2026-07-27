// // console.log("hello js ");


// // console.log(a);

// // let  a = 20;



// // var a = 20;
// // // a=30
// // var a = 50
// // console.log(a); //



// // let b =20;

// // let b = 50
// // console.log(b);  /// 50




// // const num = 50

// // const num = 60
// // console.log(num); // 50


// // console.log(num);

// // let num = 20




// // abc()

// // function abc(){
// //     console.log("hellow js");
    
// // }




// // {let a = 20
    
// // }

// // console.log(a);



// // arrow fun 

// // greet();
// // const greet = ()=>{
// //     console.log("hello js");
    
// // }




// // let obj = {
// //     name : "ali",
// //     id : 101,
// //     email :"ali@gmail.com"
// // }


// // const {name , id , email} = obj;

// // console.log(obj.name);
// // console.log(name);

// // console.log(email);
// // console.log(id);



// // console.log(obj.email);
// // console.log(obj.name);




// // const arr = [ "red", "blue", "green" ]

// // const [first , second ,  third] = arr
// // console.log(first);
// // console.log(second);
// // console.log(third);

// // console.log(arr[0]);





// // spred // resert 

// // const  arr1 = [1,2,3,4,5]
// // const arr2 = [...arr1,6,7,8,9,10]
// // console.log(arr2);



// // let user =  {
// //     name : "ali",
// //     id : 101
// // }

// // let user2 = {
// //     ...user,
// //     email : "ali@gmail.com"
// // }

// // console.log(user2);





// /// resert 


// // function student(a,b,...c){
// //     console.log(a);
// //     console.log(b);
// //     console.log(c);
// //     // console.log(d);
// //     // console.log(e);
    
    

    

// // }

// // student("ali" , 101 , "HTML" , "CSS" , "JS" , "REACT" , "nodejs" , "mongodb")




// // function num(a,...number) {
// //     console.log(a,number);
    
    
// // }

// // num("hello",1,2,3,4,8,2,85,8);



// // const a = [ "apple", "banana", "cherry" ];

// // for(let i = 0; i < a.length; i++){
// //     console.log(a[i] , i);
    
// // }


// // for(let fruit of a){
// //     console.log(fruit);
    
// // }

// // const s = "hello";

// // for(const char of s){
// //     console.log(char);
    
// // }

// // map
// // foreach
// // filter
// // reduce

// // let num = [1,2,3,4,5];

// // let res = num.forEach((items)=>{
// //     // return items * 2
// //     console.log(items * 2);
    
// // })
// // // console.log(res);



// // let res = num.map((items)=>{
// //     return items * 5
// //     // console.log(items);
    
// // })
// // console.log(res);

// // // console.log(res);




// // let arr = [1,2,3,4,5,6,7,8,9,10];

// // let res = arr.filter((items)=>{
// //     return items%2 !== 0
// // })


// // console.log(res); // 




// // let shoppincart = [ {name : "mobile" , price : 5000} , {name : "laptop" , price : 15000} , {name : "charger" , price : 10000} , {name : "mobile" , price : 5000} , {name : "laptop" , price : 15000} , {name : "charger" , price : 10000}   ]




// // let res = shoppincart.reduce((acc , curr)=>{
// //     return acc - curr.price
// //     //      1  +  50000
// //        //   50000 +  
// // },1)

// // console.log(res);



// // let arr = [10,20]

// // let res = arr.reduce((acc , cuu)=>{
// //     return acc - cuu
// //     //     0   + 10 
// //      //    10 + 20 

// // })

// // console.log(res);






// // function abc(name= "ali" ,id = 101){
// //     console.log(name , id) ;
    

// // }
// // abc("hellow" , 101)






// // // classs

// // class Student{
// //     constructor(name,age,id){
// //         this.name = name
// //         this.age = age
// //         this.id = id

// //     }
// // }


// // let data = [
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101),
// //     new Student("ali" , 12 , 101)

// // ]

// // console.log(data);


// // // let stud1 = new Student("ali" , 12 , 101);
// // // let stud2 = new Student("ali" , 12 , 101);
// // // let stud3 = new Student("ali" , 12 , 101);
// // // let stud4 = new Student("ali" , 12 , 101);

// // // console.log(stud1);
// // // console.log(stud2);
// // // console.log(stud3);
// // // console.log(stud4);





// // class Student {
// //     constructor(name,age){
// //         this.name = name,
// //         this.age = age
// //     }


// //     greet(){
// //         console.log(`My name  is ${this.name} i AM  ${this.age} year old`);
        
// //     }

// // }

// // let stud1 = new Student("ali" , 12);
// // // console.log(stud1.greet());
// // stud1.greet()




// class  Parent{
//     constructor(name , id){
//         this.name = name,
//         this.id = id

//     }
// }


// class Child extends Parent{

//     constructor(email , name){
//         // super()
//         super(name)
//         this.email = email


//         // delete this.id

//     }

// }


// let res = new Child("ali",  "ali@gmail.com")
// console.log(res);



// console.log("A"); 
// for(let i = 0; i < 100000; i++){
//     console.log(i);
    
// }
// // console.log("B");
// console.log("C");
// console.log("D");





// console.log("A");

// setInterval(function(){
//     console.log("b");
    

// } , 2000)




// setInterval(function(){
//     console.log("hello js");
    

// } , 4000)



// setTimeout(()=>{
//     console.log("settimeout");
    
// }, 4000)



// function abc() {
//     console.log("hellw jw");
// }

// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// }, 5000)
// console.log("C");
// console.log("C");
// console.log("C");
// console.log("C");
// console.log("C");
// console.log("C");
// console.log("C");

// console.log("C");






// // propmises 
// // pending
// // fulfild
// // reject



// // let promise = new Promise((resolve , reject)=>{

// //     let islogin = false;
// //     if(islogin){
// //         resolve("data mil gaya hay");
// //         // console.log("data mil gaya hay");
// //     } else{
// //         reject("Data nhi mil hay")
// //         // console.log("Data nhi mil hay");
        
// //     }


// // })
// promise
// .then((res)=>{
// console.log(res)})
// .catch((err)=>{
//     console.log(err);
    
// })



// fetch 
// axios



// var a = fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(a);



// Promise



// var a=   fetch('https://fakestoreapi.com/products')
 fetch('https://fakestoreapi.com/products')

// console.log( a)

// .then((res)=> res.json())
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
    
// })



// .then((res)=> res.json())
// .then((data)=>{
//     data.map((items)=>{
//         // console.log(items);
        
//         console.log(items.category);
//         console.log(items.image);
//         console.log(items.price);

        
//     })
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// axios('https://fakestoreapi.com/products')
// .then((res)=>{
//     console.log(res.data);
    
// })



var div = document.querySelector("div");

 fetch('https://fakestoreapi.com/products')

 .then((res)=> res.json())
.then((data)=>{
    data.map((items)=>{
        console.log(items);
        div.innerHTML += `
        <div class="card" style="width: 15rem;">
  <img style="width: 200px;" class="card-img-top" src=${items.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${items.title}</h5>
    <p class="card-text">${items.description}</p>
    <a href="#" class="btn btn-primary">Add to Card</a>
  </div>
</div>
        `
        

        
    })
})
.catch((err)=>{
    console.log(err);
    
})