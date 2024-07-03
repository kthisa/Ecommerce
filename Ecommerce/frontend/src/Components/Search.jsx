import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Search = () => {
    const[keyword,setKeyword]=useState("");
    const navigates=useNavigate();
    const searchHandler =()=>{
        navigates('/search?keyword='+keyword)


    }
    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
         
    //       // Perform your action here
    //     }
    //   };

  return (
    <div>
      <div className="input">
          <input
            type="text"
            id="search"
            className="form-"
            onChange={(e)=> setKeyword(e.target.value)}
            onBlur={searchHandler}
            placeholder="Enter Product Name ..."
          />
          <div className="inputgroup">
      
             <img onClick={searchHandler} className="searchicon" src="/products/search.png" alt="" />
    
          </div>
        </div>
    </div>
  )
}

export default Search
