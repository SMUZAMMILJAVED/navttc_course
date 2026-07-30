import Button from "./components/button/Button";
import  Nav  from "./components/nav/Nav";
import "./App.css"
import Counter from "./components/counter/Counter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import User from "./pages/user/User";
import { useEffect } from "react";
function App(){
  
return (
  <>
  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/user/:id" element={<User/>}/>
  <Route path="*" element={<NotFound/>}/>

</Routes>

  </>
  
)


} 
 export default App;