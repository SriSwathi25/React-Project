import React from "react";
import UserItem from "./UserItem";
 const UserList = (props)=>(
    <div>
    <h1> User List </h1>
    <ul>
    {
        props.data.map((d)=><UserItem username={d.username} age={d.age} key={d.id} />)
    }
    </ul>
    
        
    </div>

 )
export default UserList;