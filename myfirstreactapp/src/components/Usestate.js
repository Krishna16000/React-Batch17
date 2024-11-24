import React, {useState} from "react";

const Usestate = () => {
    const [name, setName] = useState("Hi")
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button onClick={() =>setName("Krishnakanth")}>Change</button><br/>
            <button onClick={() => setCount(count+1)}>+</button><br></br>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}
 export default Usestate;