import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, SetUsername] = useState('');
    const [password, Setpassword] = useState('');
    const { Setuser } = useContext(UserContext)
    let handleSubmit = (e) => {
        e.preventDefault();
        Setuser({ username, password })
    }
    return (
        <>
            <h1>Login Page</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => SetUsername(e.target.value)}
            />
            {" "}
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}
            >Login</button>
        </>
    );
}

export default Login