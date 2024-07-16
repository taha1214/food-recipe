import React from 'react';
import Navbar from '../../components/navbar';
import SignUp from '../../components/signup';
import Footer from '../../components/FooterEnd';
import "../../App.css";
const Signup = () => {
    return (
        <div>

        <div className='signNav'>
        <Navbar />
        </div>
        <div className='margin'>
        <SignUp />
        <Footer />
        </div>

        </div>
    );
};

export default Signup;
