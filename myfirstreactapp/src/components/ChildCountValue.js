
import { useSelector } from "react-redux";
function ChildCountValue() {
    const state = useSelector(state => state)
    return (
        <div>
            <h2>Chaild Compoenent Values</h2>
            <h3>Counter:{state.count}</h3>
        </div>
    )
}
export default ChildCountValue