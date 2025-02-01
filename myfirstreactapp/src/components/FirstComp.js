import React from "react"

const FirstComp = (props) =>{
    console.log(props);
    return(
        <div>
            {props.variable}
        </div>
    )
}

export default FirstComp;
