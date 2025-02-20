import React, { useState } from "react";
import Signup from "./SignUp";
import Login from "./Login";
const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div>
            {isSignup ? <Signup onSwitch={() => setIsSignup(false)} /> : <Login onSwitch={() => setIsSignup(true)} />}
        </div>
    );
};

export default Auth;
