import React, { useContext } from "react"
import UserContext from "../Context/UserContext";
function Profile() {
    let { user } = useContext(UserContext);


            if(!user){
               return <div>User not found</div>
            }else{
              return  <div>Welcome {user.username}</div>
            }


}

export default Profile;