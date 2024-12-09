import React from "react";

function App(){
    const names= ['James','Paul','Rayn', 'George'];
    const arr=[10,20,30,40,50,60,70,80]
    const filtered = arr.filter(item=>item<50);
    return (
        <div>
            <center>
            {
                filtered.map(item => <li>{item}</li>)
            }
            </center>
        </div>
        
    )
}

export default App;