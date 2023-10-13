import React,{useState} from "react"; 


const StateWithArray = () => {

 const [favourite, setFavourite] = useState(["apple", "mango", "banana"])

   function updateFavorite(event){
        //    favourite.push(event.target.value)
        let arr = favourite 
        arr.push(event.target.value)
        setFavourite(arr)
   }

    return(
        <div>
             <input type="text" placeholder="Enter your favourite fruit"
              onChange={updateFavorite}
             /> 
             <button> Submit </button>

             {/* Display ur favourite fruits */}
        </div>
    )
}

export default StateWithArray;