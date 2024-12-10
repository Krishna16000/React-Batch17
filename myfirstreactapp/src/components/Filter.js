import React from "react";
function App(){
    const arr= [10,20,30,40,50,60,70,80];
    const filtered = arr.filter((items) =>items>50)
    return(
        <div>
            {
                filtered.map(items=><li>{items}</li>)
            }
        </div>
    );
}
export default App;