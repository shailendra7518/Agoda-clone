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
export function Home() {
  return (
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
           <input type="text" className="serach_input" />
           </div>
         
         <div className="date_and_gest">
          <div className="date">
          <input type="date" id="check_in_date" className="date_input" />
          <hr className="perpendicular-line"/>
           <input  type="date" name="" id="check_out_date" className="date_input"/>
          </div>
          <div className="select_adult_div">
            <select name="" className="select_adult">
              <option value="">1 adult</option>
              <option value="">1 adult</option>
              <option value="">1 adult</option>
              <option value="">1 adult</option>
            </select>
          </div>
         </div>
         
          <button className="search_button">SEARCH</button>
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
  );
}
