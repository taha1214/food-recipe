import { Link } from "react-router-dom";


 const Navbar = () => {
    return(
        <div className="navbar container">
            <a href="#" className="logo">Perfect<span className="orange">Recipe</span></a>
            <div className="nav-links">
                <Link to="/">home</Link>
                <Link to="/Recipes">Recipes</Link>
                <a href="#">Add Recipe</a>
                <a href="#">blocks</a>
                <a href="#">About us</a>
            </div>
            <div className="nav-button">
              <Link to="/Login">  <button className="white">Login</button></Link>
              <Link to="/Signup"> <button className="dark">Signup</button></Link>
            </div>
        </div>
    )

 }
 export default Navbar;