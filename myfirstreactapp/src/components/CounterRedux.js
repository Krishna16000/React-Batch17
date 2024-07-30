import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChildCountValue from "./ChildCountValue";
function CounterRedux() {
    // const [count, setCount] = useState(0);
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log('storeData...', storeData)
    const incRement = () => {
        dispatch({ type: 'Increment' })
    }
    const decreemnt = () => {
        dispatch({ type: 'Decrement' })
    }
    return (
        <div>
            <h1>Counter..</h1>
            <h2>Count:{storeData.count}</h2>
            <button onClick={incRement}>Increment</button>
            <button onClick={decreemnt}>Decreemnt</button>
            <ChildCountValue />
        </div>
    )
}
export default CounterRedux