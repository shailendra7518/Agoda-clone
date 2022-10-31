import "./TopHidden.css"
import { BsSearch} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Loading } from "../LoginSignup/login/loading";
export function TopHidden(){
const [loading,setloading]=useState(false)
  const navigate=useNavigate()
  let [Searchdata,setSearchdata]=useState({
    destination:"",
    start_date:"",
    end_date:"",
    adult:"1"
  })
  
  const handlechange=(e)=>{
    const{id,value}=e.target
    setSearchdata({...Searchdata,[id]:value})
  }
  const handdlesearch=()=>{
    if(Searchdata.start_date=="" || Searchdata.end_date=="" ||Searchdata.destination=="" ){
     
      alert("please fill all area")
      return
    }
    setloading(true)
    let result=Searchdata.destination.toLowerCase()
       
    console.log(result)
  axios.get(`https://agoda-clone.cyclic.app/findhotels/${result}`)
  .then(function (response) {
    // handle success
    console.log(response);
    let hotels=response.data
    localStorage.setItem("Allhotels",JSON.stringify(hotels))
    setloading(false)
    // setloading(false)
    navigate("/productpage")
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    localStorage.setItem("Searchdata",JSON.stringify(Searchdata))
  
  }





     return loading ? <Loading/>: <div className="main_top_div">
         <div className="div_for_search">
             <BsSearch fontSize={"2vw"}/>
           <input type="text" placeholder="Search place like Mumbai, etc" className="top_serach_input" id="destination" onChange={handlechange}  required  />
         </div>
         <div className="div_for_input">
         <input type="date" id="start_date" className="top_date_input" onChange={handlechange} required />
          <hr className="top-perpendicular-line"/>
           <input  type="date" name="" id="end_date" className="top_date_input" onChange={handlechange} required/>
         </div>
         <div className="div_for_select" >
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