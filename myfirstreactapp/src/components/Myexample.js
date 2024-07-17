import React,{useState} from "react";

const Myexample = () => {
    const [user,setUser] = useState("");
    const handler = e => {
        setUser(e.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="usernmae" value={user} name= "user" onChange={handler}/>
            <br/>
            {user}
        </div>
    )
}
export default Myexample;