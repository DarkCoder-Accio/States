import React,{useState} from "react"; 


const StateWithArray = () => {

 const [favourite, setFavourite] = useState(["apple", "mango", "banana"])
 const [fruits, setFruits] = useState("")

 console.log(fruits)

   function updateFavorite(){
     //    console.log(event.target.value)
        setFavourite([...favourite, fruits])
   }

    return(
        <div>
             <input type="text" placeholder="Enter your favourite fruit"
              onChange={e => setFruits(e.target.value)}
             /> 
             <button onClick={updateFavorite}> Submit </button>

             {/* Display ur favourite fruits */}
             <div>
               {
                    favourite.join(",")
               }
             </div>
        </div>
    )
}

export default StateWithArray;




//    favourite.push(event.target.value)
     //    let arr = favourite 
     //    arr.push(event.target.value)
     //    setFavourite(arr)

     // let newArray = [...favourite]  
      
     //  let newArr = structuredClone(favourite) // node verseion > 17.2