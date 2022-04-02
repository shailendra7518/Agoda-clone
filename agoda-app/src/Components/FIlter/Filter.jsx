import { BsSearch, BsCircle, BsFillStarFill } from "react-icons/bs";
import { useState } from "react";
import "./Filter.css";
export function FilterPart() {
  const [show, setshow] = useState(false);

  return (
    <div className="filter_main_div">
      <div className="all_button_toggle_div">
        Filter:
        <button
          className="toggle_button"
          onClick={() => {
            setshow(show ? false : "quarantine");
          }}
        >
          Quarantine
        </button>
        <button
          className="toggle_button"
          onClick={() => {
            setshow(show ? false : "price");
          }}
        >
          Price
        </button>
        <button
          className="toggle_button"
          onClick={() => {
            setshow(show ? false : "star_rating");
          }}
        >
          Star rating
        </button>
        <button
          className="toggle_button"
          onClick={() => {
            setshow(show ? false : "propfaci");
          }}
        >
          Property fa...
        </button>
        <button
          className="toggle_button"
          onClick={() => {
            setshow(show ? false : "proptype");
          }}
        >
          Property type
        </button>
        <div className="toggle_search_div">
          <BsSearch />
          <input type="text" placeholder="Text Search" id="" style={{height:"90%",width:"70%",outline:"none",border:'0px',fontSize:"1.2vw"}} />
        </div>
      </div>

      {show == "quarantine" ? (
        <div className="popup_quarantine_box">
          <th>Which properties whould you like to see</th>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">all hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">quarantine hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">non-quarantine hotels</label>
          </div>
        </div>
      ) : (
        ""
      )}
      {show == "price" ? (
        <div className="popup_price_box">
          <div>
            <input type="range" name="" id="" style={{ width: "90%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {" "}
            <td> Rs 0</td> <td>Rs 58265</td>
          </div>
          <h4>deals and discount</h4>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">all hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">quarantine hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">non-quarantine hotels</label>
          </div>
          <h4>payment option</h4>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">all hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">quarantine hotels</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <label htmlFor="">non-quarantine hotels</label>
          </div>
        </div>
      ) : (
        ""
      )}
      {show == "star_rating" ? (
        <div className="popup_starating_box">
          <h4>Start rating</h4>
          <div>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div>
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <div>
            <BsFillStarFill />
          </div>
          <div>no rating</div>
          <h4>guest rating</h4>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>9+</span>
            <label htmlFor="">Exeptional</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>8+</span>
            <label htmlFor="">Excellent</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>7+</span>
            <label htmlFor="">Very good</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>6+</span>
            <label htmlFor="">Good</label>
          </div>
          <h4>location rating</h4>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>9+</span>
            <label htmlFor="">Exeptional</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>8+</span>
            <label htmlFor="">Excellent</label>
          </div>
          <div>
            {" "}
            <input type="checkbox" name="" id="" />
            <span style={{ fontWeight: "bold" }}>7+</span>
            <label htmlFor="">Very Good</label>
          </div>
        </div>
      ) : (
        ""
      )}
      {show == "propfaci" ? (
        <div className="popup_prop_func_box">
          <h4>Property facilities</h4>
          <div className="prop_facility_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Swimming pool (171)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Airport transfer (1116)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Family/child friendly (2179)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Restaurants (1097)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Nightclub (64)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Golf course [on-site] (13)</label>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Internet (2246)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Gym/fitness (278)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Non-smoking (1831)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Smoking area (1574)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facilities for disabled guests (699)</label>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Car park (2004)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Front desk [24-hour] (2712)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Spa/sauna (165)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pets allowed (367)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Business facilities (520)</label>
              </div>
            </div>
            
          </div>
          <h4>Room amenities</h4>
          <div className="prop_facility_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">TV</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Coffee/tea maker</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ironing facilities</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Kitchen</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pets allowed in room</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Air conditioning</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Refrigerator</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Heating</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Washing machine</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Internet access</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Balcony/terrace</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Bathtub</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Private pool</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Business facilities (520)</label>
              </div>
            </div>
            
          </div>
          <h4>Room type</h4>
          <div className="prop_facility_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Double</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Queen</label>
              </div>
            
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">King</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Bunk bed</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Single/twin</label>
              </div>
             
            </div>
            
          </div>
          <h4>Room offers</h4>
          <div className="prop_facility_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Breakfast included</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Late check-out</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Afternoon tea</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Outside food delivery allowed</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Cruise dinner</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Telemedicine consulting service</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Dinner included</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Early check-in</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Car rental</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Delivery from nearby convenience store</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Free shuttle service</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Kids' menu</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Lunch included</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Airport transfer</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Delivery from family and relatives allowed</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Exercise bike</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Exercise bike</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Treadmill</label>
              </div>
            </div>
            
          </div>
        </div>
      ) : (
        ""
      )}
      {show == "proptype" ? (
        <div className="popup_prop_type_box">

          <h4>Popular hotel brands</h4>
          <div className="prop_type_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Radisson Hotel Group</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">OYO Rooms</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">FabHotels</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Imperial Hotels Group</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Lemon Tree Hotels</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Marriott Hotels and Resorts</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Treebo Hotels</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">InterContinental Hotels Group</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Sarovar Hotels & Resorts</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Taj Hotels Resorts and Palaces</label>
              </div>
             
            </div>
            
          </div>
          <h4>Property type</h4>
          <div className="prop_type_child_div">
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hotel (2951)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Serviced apartment (15)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Entire house (427)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Love hotel (1)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Homestay (22)</label>
              </div>

              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Family/child friendly (2173)</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Entire apartment (233)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Guesthouse/bed and breakfast (230)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hostel (28)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Love hotel (1)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Homestay (21)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Family/child friendly (2173)</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Resort (18)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Entire villa (28)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Entire bungalow (11)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Tent (2)</label>
              </div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Farm stay (10)</label>
              </div>
            </div>
            
          </div>
          <h4>Number of bedroom</h4>
          <div className="prop_type_child_div">
            <div>
             
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">1 bedroom/studio</label>
              </div>
            
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">2 bedrooms</label>
              </div>
             
            </div>
            <div>
              <div>
                {" "}
                <input type="checkbox" name="" id="" />
                <label htmlFor="">3+ bedrooms</label>
              </div>
             
            </div>
            
          </div>


        </div>
      ) : (
        ""
      )}
    </div>
  );
}
