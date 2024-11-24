import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function ApiCall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => setData(response.data));
  }, []);
  console.log("vsdhg", data);

  return (
    <div>
      <h1>Api Call...</h1>
      <div>
        {data.map((items) => (
          <li key={data.id}>
            {console.log("hhhhh",items)} 
            {items.email}</li>
        ))}
      </div>
    </div>
  );
}
export default ApiCall;
