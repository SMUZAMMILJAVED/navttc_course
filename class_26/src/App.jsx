import { Routes,Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Home from "./pages/homepage/Home";
import Shop from "./pages/shop/Shop";
import { useEffect, useState } from "react";

function App(){
   const [data,setData]=useState('')
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json);
      console.log(json);
      }
      )
   },[])
  
//  const [a,b]= useState(2)
//  console.log(b);
// const [a,b]= useState(2);
// console.log(b);

return (
  <>
  title : {data.title} <br />
  isCompelte : {data.completed?.toString()}
 {/* <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
 </Routes> */}
  </>

)

}
export default App;