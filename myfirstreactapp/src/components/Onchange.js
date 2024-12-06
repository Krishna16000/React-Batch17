import  React, {useState} from "react";

const App=()=>{
    const [user,setUser] = useState("");
    const handler = e =>{
        setUser(e.target.value)
    }
    return(
        <div>
            <h1>
            <input type= "text" placeholder="username" value={user} name="user" onChange={handler}/></h1>
            {user}
        </div>
    
    )

}

export default App; 