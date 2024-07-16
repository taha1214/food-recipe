import firstBlog from "../../assets/pics/firstBLog.jpeg"
import SecondBlog from "../../assets/pics/secondBLog.jpeg"
const Blog = () => {
    return(
        <div className="blog-container">
          <div className="mid-heading"><h1>blogs</h1></div>
          <div className="mid-view"><h2>view more</h2></div>
            <div className="blog-HP">

                <img className="blog-pic" src={firstBlog} alt="firstBlog" />
                <h2>Unlocking the Benefits of Intermittent Fasting for </h2>
                <p>Weight Management and Health Weight
                 Management and Health Weight Management and Health Weight Management and Health Weight.</p>
            </div>
            <div className="blog-SP">
                <img className="blog-pic" src={SecondBlog} alt="secondBlog" ></img>
                <h2>The Impact of Sugar Consumption on Your Health</h2>
                <p>Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers 
                 Unveiling the Hidden Dangers Unveiling the Hidden Dangers</p>
            </div>
        </div>
    )
}
export default Blog;