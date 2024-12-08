import React from "react";

function App(){
    const arr=[
        {
            id:1,
            title:"React Js"
        },
        {
            id:2,
            title:"Node Js"
        },
        {
            id:3,
            title:"Express Js"
        },
        {
            id:4,
            title:"Angular Js"
        }
    ]
    return(
        <div>
            {
            arr.map((value) => <li key={value.id}>{value.id}</li>)
            }
        </div>
    );

}
export default App;