import { useState, useEffect } from "react";

function App (){
    const [count, setCount] = useState(0);
    useEffect(()=> console.log(count),[])
    return(
        <div>
            <p>You clicked{count} times</p>
            <button onClick={()=> setCount(count+1)}>Click me</button>
        </div>
    )
}

export default App;
