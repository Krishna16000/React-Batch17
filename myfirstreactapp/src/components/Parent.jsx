import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [data, setData]= useState({name:John, age:30});
    return <Child data={data}/>

}