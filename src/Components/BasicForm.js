
import React,{useState} from "react";

const BasicForm = () => {

    let [name, setName] = useState("")

    // console.log("name",name)

    function updateName(e){

        console.log(e.target)

        setName(e.target.value)
        
    }

    return(
        <div>
             <input type="text" placeholder="Enter your name" 
              onChange = {updateName} 
             />
             <button> Submit </button>
             <p> {name} </p>
        </div>
    )
}

export default BasicForm;


// reloading and rerendering