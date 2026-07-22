

// // alert("hellow js")

// // console.log("hellwo js")



// // Elements Nodes
// // Commit Nodes 
// // Text Nodes 


// // console.log(document.childNodes);

// // console.log(document.body.childNodes[5]);

// // var a = document.body.childNodes[5].childNodes[5];
// // var a=  document.body.childNodes[5].nodeName[5]

// // var a= document.body.childNodes[2].nodeType
// // var a= document.body.childNodes
// // var b = document.body.childNodes[3].nodeType

// // var text = document.body.childNodes[0].nodeType
// // var commit = document.body.childNodes[3].nodeType
// // var element = document.body.childNodes[3].nodeType

// // console.log(a);

// // console.log(text);

// // console.log(b);
// // console.log("Text"  , text);
// // console.log("Commit" , commit);
// // console.log("elelmt" , element);




// // var a = document.body.lastChild
// // console.log(a);






// function btn() {
//     var image = document.getElementById("image");
//     var button =  document.getElementById("button");

//     var image1 = "https://www.freepnglogos.com/uploads/bulb-png/light-bulb-png-transparent-image-png-transparent-best-4.png";

//     var image2 = "https://www.freepnglogos.com/uploads/bulb-png/light-bulb-png-transparent-image-pngpix-26.png"

//     // console.log(button.innerHTML);
    
  
//     // image.src = image2

//     // button.innerHTML = "OFF"

//     // if (button.innerHTML === "ON") {
//     //     image.src = image2
//     //     button.innerHTML = "OFF"
//     // }else{
//     //     image.src = image1
//     //     button.innerHTML = "ON"
//     // }






//     // // if(button.innerHTML === "ON"){
//     // //     image.src = image2
//     // // } else{
//     // //     image.src = image1
//     // // }

//     // if (image == image1) {
//     //     image.src = image2
//     // button.innerHTML = "OFF"

//     // } else{
//     //     image.src = image1
//     // button.innerHTML = "ON"

//     // }

// }



var num = 0
function plus(params) {
    var a = document.getElementById("counter")


    num++

    a.innerHTML = num
    
}


function minus(params) {
    // console.log("m");
      var a = document.getElementById("counter")

   

    if (a.innerHTML > 0) {
           num--

      a.innerHTML = num

        
    }
    
    
}


function resert(params) {
    num = 0

      var a = document.getElementById("counter")

      a.innerHTML = num
    
    
    
}