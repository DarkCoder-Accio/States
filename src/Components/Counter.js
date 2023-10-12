
import React,{useState} from "react";


const Counter = () => {
   const [a, setA] = useState(0) // ignore reload of this line

   function increaseA(){
       setA(++a)
   }
    


    return(
        <div>
            <h1>Counter App</h1>  
            <h2>Count:{a }</h2>
            <button onClick={increaseA}>Increse</button>
            <button onClick={()=>setA(a-1)}>Decrease</button> 
            <button onClick={()=>setA(0)}>Reset</button>
        </div>
    )
}

export default Counter;