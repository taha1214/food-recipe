import image from "../../assets/pics/download.jpeg"
import { Link } from "react-router-dom";

const Main = () =>{
    return(
        <div className="main-container">
            <div className="left">
                    <h1>Your daily dish a <span>food</span> journey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in est non odio viverra fermentum eget at tortor.
                         Sed porttitor rhoncus pretium. Vestibulum a nulla venenatis, tincidunt justo non</p>
                         <br/>
                         <button className="dark">Signup</button>
                        <p>do you have  account? <span className="orange"><Link to="/login">Log in</Link></span></p>
            </div>


            <div className="right">
                    <img src={image} alt="dish"></img>
            </div>
        </div>
    )

}
export default Main;
