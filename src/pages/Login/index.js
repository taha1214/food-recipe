import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/FooterEnd';
import Login from '../../components/login';
import "../../App.css";

const LogIn = () => {
    return(
        <div>

        <div>
        <Navbar />
        </div>
        <div>
        <Login />
        <Footer />
        </div>

        </div>
    );
};
export default LogIn;