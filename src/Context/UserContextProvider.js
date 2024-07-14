import React, { useState } from "react";
import UserContext from "./UserContext";

let UserContextProvider = ({ children }) => {
    const [user, Setuser] = useState(null)
    return (
        <UserContext.Provider value={{ user, Setuser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;