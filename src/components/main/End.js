import first from "../../assets/pics/footerfirst.jpeg"
import second from "../../assets/pics/footersec.jpeg"
import third from "../../assets/pics/footerthird.jpeg"
import fourth from "../../assets/pics/footerfourth.jpeg"
import fifth from "../../assets/pics/footerfifth.jpeg"
import sixth from "../../assets/pics/footersixth.jpeg"
import seven from "../../assets/pics/footerseventh.jpeg"
import eight from "../../assets/pics/footereight.jpeg"

const End = () => {
    return(
        <div className="end-container">
            <h1 className="end-heading">popular categories</h1>
            <div className="end-pics">
              <div className="circle"> <img className="end-image" src={first} alt="circle"/>
              <p>breakfast recipes</p>
              </div>
              <div className="circle" > <img className="end-image" src={second} alt="circle"/>
              <p>lunch recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={third} alt="circle"/>
              <p>dinner recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={fourth} alt="circle"/>
              <p>appetizer recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={fifth} alt="circle"/>
              <p>salad recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={sixth} alt="circle"/>
              <p>pizza recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={seven} alt="circle"/>
              <p>smoothie recipes</p>
              </div>
              <div className="circle"> <img className="end-image" src={eight} alt="circle"/>
              <p>pasta recipes</p>
              </div>
            </div>
        </div>
    )

}
export default End;