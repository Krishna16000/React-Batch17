import { Fragment } from "react";
function Child(p){
    // console.log(p);
    return(
        <Fragment>
            <p>{p.name}</p>
            <p>{p.place}</p>
        </Fragment>
    )
}

export default Child;