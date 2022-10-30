import "../Home/Home.css";
import { BsSearch,BsHouse ,BsHouseDoorFill,BsFillCalendarPlusFill} from "react-icons/bs";
import { RiBuildingFill,RiHome2Fill,RiFlightTakeoffLine } from "react-icons/ri";
import { ImOffice } from "react-icons/im";
import { BiShapePolygon} from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { Slider } from "./slider/Slider";
import { TopDest, TopDestOutSide } from "./topdestination/TopDestination";
import { Vacation } from "./Travelvacation/Vacation";
import { RecomHome } from "./reccomonded/ReomHome";
import { NextTrip } from "./Nexttrip/NextTrip";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{TopHidden} from  "../TopHiddenNav/TopHidden"
import axios from "axios";
export function Home() {
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

  axios.get(`https://agoda-clone.cyclic.app/${Searchdata.destination}`)
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
console.log(Searchdata)

  return (<>
  <TopHidden/>
    <div className="container">
      <div className="banner_and_blurbox">
        <div className="banner_div">
           <h1>HOTELS,RESORTS,HOSTELS & MORE</h1>
           <h3>Get the best prices on 2,000,000+ properties,worldwide</h3>
        
        </div>

         <div className="blurbox"></div>
         <div className="search_area">
             <div className="facility_bar">
            {/* click option div */}
                <div className="click_option">
                  <RiBuildingFill fontSize={"2.2vw"}/>
                    Hotel & Homes
                </div>
                <div className="click_option">
                  <BsHouseDoorFill fontSize={"2.2vw"}/>
                    Private stays
                </div>
                <div className="click_option">
                  <ImOffice fontSize={"2.2vw"}/>
                    Hotel & flight
                </div>
                <div className="click_option">
                  <RiFlightTakeoffLine fontSize={"2.2vw"}/>
                    flight
                </div>
                <div className="click_option">
                  <BsFillCalendarPlusFill fontSize={"2.2vw"}/>
                     Long Stays
                </div>
                <div className="click_option">
                  <BiShapePolygon fontSize={"2.2vw"}/>
                   Activites
                </div>
             </div>
           <div className="search_box">
           <BsSearch fontSize={"2vw"}/>
           <input type="text" className="serach_input" id="destination" onChange={handlechange} />
           </div>
         
         <div className="date_and_gest">
          <div className="date">
          <input type="date" id="start_date" className="date_input" onChange={handlechange} />
          <hr className="perpendicular-line"/>
           <input  type="date" name="" id="end_date" className="date_input" onChange={handlechange} />
          </div>
          <div className="select_adult_div">
            <select name="" className="select_adult" id="adult" onChange={handlechange} >
              <option value="1">1 adult</option>
              <option value="2">2 adult</option>
              <option value="3">3 adult</option>
              <option value="4">4 adult</option>
            </select>
          </div>
         </div>
         
          <button className="search_button" onClick={handdlesearch} >SEARCH</button>
         </div>
      </div>

{/* from here next thing will be */}
 <div className="learn_more">
   <div className="learn_more-textside">
   <FcCalendar fontSize={"5.2vw"}/>
   Stay longer and save more!
   Save up to 20% extra on stays longer than a week.
   </div>
   <button className="learn_more_button">learn more</button>
 </div>
<Slider/>

<TopDest/>
<Vacation/>
<RecomHome/>
<button  className="see_more_properties">See more (Goa) properties</button>
<NextTrip/>
<TopDestOutSide/>

    </div>
    </>
  );
}
