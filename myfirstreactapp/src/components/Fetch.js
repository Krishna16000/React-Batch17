import React, {useEffect,useState} from "react";

const App=()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            response=>response.json()).then(
                json=>setData(json)
            )
        
    },[])
    return(
        <div>
            {
                data.map(items=> <li key={items.id}>{items.title}</li>)
            }
        </div>
    )
}

export default App;
