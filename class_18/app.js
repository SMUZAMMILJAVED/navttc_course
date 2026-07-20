// // // // // // console.log("hello js");


// // // // var a = 20
// // // // console.log(a);


// // // // function num(){

// // // //     a = 60
// // // //     // var a = 55
// // // //     // console.log("hellow js");
// // // //     // console.log(a + b);
// // // //     console.log(a);
    
    
    

// // // // }
// // // // num()


// // // // console.log(a);




// // // // var i = 0;

// // // // while (i <= 5) {
// // // //     console.log("hellow js" , i);
// // // //     i++
// // // // }


// // // /* var i = 0;
// // // do {
// // //     console.log("hellow js" , i);
// // //     i++
    
    
// // // } while (i > 5); */








// // // // function btn() {
// // // //     // var a = document.getElementById("input");
// // // //     // console.log(a.value);
// // // //     // console.log(a.value);
// // // //     // console.log("hello js ");


// // // //     var a= document.getElementById("h1");
// // // //     console.log(a);  // 
    
// // // //     console.log(a);

// // // //     a.className += " change"
    
    
    
// // // // }




// // // // console.log(document);




// // // function setvalue() {
// // //     var a = document.getElementById("input");

// // //     a.className = "change"

// // //     // console.log(a);

// // //     a.value = "hello js"
    
    
// // // }



// // // function btn() {
// // //     var a= document.getElementById("input");

// // //     console.log(a.value);
    
    
// // // }



// // function changeimage() {

// //     var image =  document.getElementById("image")
// //     // console.log(image.src);

// //     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIqW8_JZwMBrZ042dJDdGC-CHz6Cn3QxQGX2tLwQxCQ&s=10"

    
// // }


// // function originalimage(){
// //     var image = document.getElementById('image');

// //     image.src = "https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"
// // }





// function showmore(){
//     // console.log("hellow");
//     var a = document.getElementById("para"); 
//     // console.log(a);
    
//     // console.log(a.innerHTML);


//     var data = "JavaScript (JS) is a versatile, lightweight, and high-level programming language primarily used to add interactivity and dynamic behavior to websites. Alongside HTML (structure) and CSS (style), it stands as one of the three core technologies of the World Wide Web.Core CapabilitiesClient-Side Interactivity: It runs directly inside the user's web browser. This allows it to update content, animate images, validate forms, and control multimedia instantly without reloading the page.Server-Side Development: Using modern execution environments like Node.js, JavaScript can handle database management, API creation, and backend server logic.Multi-Paradigm Engine: It natively supports event-driven, object-oriented, and functional programming styles. <a href='#' onclick='showless()'>Show less</a>  "
//     // console.log(a);
//     // console.log(a.innerHTML);
//     // console.log(data);

//     // a.innerHTML = "helllow js"

//     a.innerHTML  = data
    
    
// }



// function showless() {
//     // console.log("helwllw");
//     var a = document.getElementById("para");

//     var data = "JavaScript (JS) is a versatile, lightweight, and high-level programming language primarily used to add interactivity and dynamic behavior to websites... <a href='#' onclick='showmore()'>Show More</a>"
    
//     a.innerHTML = data;
    
// }




// function btn() {
//     var a = document.getElementById("image")
//     // console.log(a);

//     a.className = "visible"
    
//     // console.log("helwejk");
    
    
// }



// function btn(params) {
//     var a =  document.getElementsByTagName("p")
//     // console.log(a[2]);

//     // a[2].className = "red"
//     console.log(a[2].innerHTML);
    
    
    
// }



function press(e) {
    var input = document.getElementById("input");
    // console.log(input);
    // console.log(e);  // 
    // console.log(input.value);
    
    input.value += e
    // console.log(e);
    
    
}



function equal() {
     var input = document.getElementById("input");

     input.value = eval(input.value)
    
    
}


function clr(params) {
    var a = document.getElementById("input")

    a.value = " "
    
}