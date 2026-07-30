import { Link } from 'react-router-dom';
import './Nav.css'
function Nav({title}){
return (
    <ul className="nav">
        <h1>{title}</h1>
          <Link to="/"><li>home</li></Link>  
       <Link to="/about"><li>about</li></Link>    
           <li>login</li>
           <li>signup</li>
        </ul>
)
}
export default Nav;