import { useState } from "react"
import { useSelector } from "react-redux";
function StatesEvents() {
    const state = useSelector(state => state)
    const [name, newName] = useState('React')
    const [city, newCity] = useState("Bangalore");
    const [emp, setEmp] = useState({ name: 'React', age: 10, city: 'usa' })

    const clicAction = () => {
        // city = 'Hyderbad';
        newName('Java')
        newCity('Pune')
        // console.log(name, city)
    }
    return (
        <div>
            <h1>StatesEvents...</h1>
            <h1>{state.age}</h1>
            <h2>Name:{name}</h2>
            <h2>City:{city}</h2>
            <button onClick={clicAction}>click</button>
            {/* <div>
                <ul>
                    <li>{emp.name} {emp.age} {emp.city}</li>
                </ul>
            </div> */}
        </div>
    )
}
export default StatesEvents