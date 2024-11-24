import React, {useState} from "react";
const App=()=>{
    const [user, setUser] = useState("");
    const handler=e=>{
        setUser(e.target.value)
    }


return(
    <div>
        <h1>
        <input type= "text" placeholder="username" onChange={handler }value={user} name="user"></input></h1>
        {user}
    </div>
)
}
export default App;

  



