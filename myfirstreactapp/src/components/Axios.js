import React, {useEffect,useState} from "react";
import axios from 'axios';

const App= ()=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response=>setData(response.data)
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