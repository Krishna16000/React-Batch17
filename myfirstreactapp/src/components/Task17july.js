import { useEffect, useState } from "react"
import axios from "axios";
function Task() {

    const [list, setList]= useState([])
    useEffect (()=>{
        const url = 'https://jsonplaceholder.typicode.com/users';
         
         axios.get(url).then(response => setList(response.data))
        //  console.log(response);
    })    

return (
    <div>
        {/* <h2 className="list">AddToList</h2>
        <div>
            <label>Name:</label>
            <input type="text" onChange={InputFormHandler} value={userName}/>
            <button onClick={AddToDoList} style={{ backgroundColor: 'blue', fontSize: "20px" }}>Add</button> */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                       
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {list.map((items, i) => (
                        <tr key={i}>
                            {/* <td>{i }</td> */}
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.email}</td>
                            
                            {/* <td><button onClick={()=>deletebtn(i)}>Delete</button></td> */}
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    
)
}

export default Task;
