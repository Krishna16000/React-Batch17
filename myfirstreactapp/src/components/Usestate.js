import React, {useState} from "react";

const Usestate = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>+</button><br></br>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}
 export default Usestate;