import { Routes as AppRouter, Route } from "react-router-dom";
import LogIn from "../pages/Login/index";
import Signup from "../pages/Signup/index"; 
import React from "react";
import Home from "../pages/Home"
import Recipes from "../pages/Recipes/index";
// import App from "../App";

const Routes = () => {
    return (
            <AppRouter>
                <Route path="/Recipes" element={<Recipes />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<Signup />} />
            </AppRouter>
    );
}

export default Routes;
