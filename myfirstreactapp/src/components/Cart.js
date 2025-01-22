import React, {useContext} from "react"
import {store} from '../App'

const Cart= ()=>{
    const [data,setData]= useContext(store)

    return(
        <div>
    
               <h3 {...data.length}></h3>
           
        </div>
    )
}

export default Cart