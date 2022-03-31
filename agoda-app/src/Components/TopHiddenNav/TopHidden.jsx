import "./TopHidden.css"
import { BsSearch} from "react-icons/bs";
export function TopHidden(){
     return <div className="main_top_div">
         <div className="div_for_search">
             <BsSearch fontSize={"2vw"}/>
           <input type="text" className="top_serach_input" />
         </div>
         <div className="div_for_input">
         <input type="date" id="check_in_date" className="top_date_input" />
          <hr className="top-perpendicular-line"/>
           <input  type="date" name="" id="check_out_date" className="top_date_input"/>
         </div>
         <div className="div_for_select">
         <select name="" className="top_select_adult">
              <option value="">1 adult</option>
              <option value="">1 adult</option>
              <option value="">1 adult</option>
              <option value="">1 adult</option>
            </select>
         </div>
         <button className="button_for_search">SEARCH</button>
     </div>
 }