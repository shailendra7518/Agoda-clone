import "./TopHidden.css"
import { BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function TopHidden(){

  const navigate=useNavigate()
  const [Searchdata,setSearchdata]=useState({
    destination:"",
    start_date:"",
    end_date:"",
    adult:""
  })
  
  const handlechange=(e)=>{
    const{id,value}=e.target
    setSearchdata({...Searchdata,[id]:value})
  }
  const handdlesearch=()=>{
    
  axios.get(`https://blooming-brook-61650.herokuapp.com/findhotels/${Searchdata.destination}`)
  .then(function (response) {
    // handle success
    console.log(response);
    let hotels=response.data
    localStorage.setItem("Allhotels",JSON.stringify(hotels))
    // setloading(false)
    navigate("/productpage")
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    localStorage.setItem("Searchdata",JSON.stringify(Searchdata))
  
  }





     return <div className="main_top_div">
         <div className="div_for_search">
             <BsSearch fontSize={"2vw"}/>
           <input type="text" className="top_serach_input" id="destination" onChange={handlechange} />
         </div>
         <div className="div_for_input">
         <input type="date" id="start_date" className="top_date_input" onChange={handlechange} />
          <hr className="top-perpendicular-line"/>
           <input  type="date" name="" id="end_date" className="top_date_input" onChange={handlechange}/>
         </div>
         <div className="div_for_select">
         <select name="" className="top_select_adult" id="adult" onChange={handlechange}>
              <option value="1">1 adult</option>
              <option value="2">2 adult</option>
              <option value="3">3 adult</option>
              <option value="4">4 adult</option>
            </select>
         </div>
         <button className="button_for_search" onClick={handdlesearch}>SEARCH</button>
     </div>
 }