import Navbar from '../../components/navbar/index';
import Main from '../../components/main/index';
import Mid from "../../components/main/Mid"
import Blog from '../../components/main/Blog';
import MidEnd from '../../components/main/Mid-End';
import Touch from '../../components/main/Footer';
import End from '../../components/main/End';
import React from 'react';
import Footer from "../../components/FooterEnd/index"

const Home = () => {
    return(
    <div>
      <Navbar />
      <Main />
      <Mid />
      <Blog />
      <MidEnd />
      <Touch />
      <End />
      <Footer />
    </div>
    )
}
export default Home;