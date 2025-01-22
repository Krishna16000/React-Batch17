import React, {useContext} from "react";
import {store} from '../App'

const Component1 = ()=>{
    const [data, setData] = useContext(store)

    return(
        <div clasName="card">
            <div className="card-body">
           
            Component 1{data}
            </div>
            
        </div>
    )
}

export default Component1