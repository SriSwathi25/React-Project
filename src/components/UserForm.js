import React, { useState } from "react";
import classes from "./form.module.css";
const UserForm = (props)=>{

        const [username, setUsername] = useState("");
        const [age, setAge] = useState("");
        const sendData = (event)=>{
            event.preventDefault();
            const nameVal = event.target.username.value;
            const ageVal = event.target.age.value;
            if(nameVal.trim() == ""){
                props.showModal(true);
            }
            else{
            const obj = {};
            obj.username = nameVal;
            obj.age = ageVal;
            obj.id = Math.random();
            props.addDataHandler(obj);
            setUsername("");
            setAge("");
            }

        }
return (

    <div className={classes.form}>
        <h1>User Form</h1>
        <form onSubmit={sendData}>
            Name : <input type="text" name="username" value={username} onChange={(e)=>(setUsername(e.target.value))} />
            <br></br>
            Age : <input type="number" min="0" max="100" name="age" value={age} onChange={(e)=>(setAge(e.target.value))}/>
            <br></br>
            <button type="submit">Submit</button>
        </form>
    </div>
)

}

export default UserForm;