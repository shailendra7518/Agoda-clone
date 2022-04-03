import {FaSmoking} from "react-icons/fa";
import {FaSmokingBan} from "react-icons/fa";
import {MdOutlineKingBed} from "react-icons/md";
import {MdOutlineSingleBed} from "react-icons/md";

import "./customer.css";

import { useState } from "react";
import { useDispatch } from "react-redux";   
import { changeInformation } from "../../../redux/checkoutChildComponent/action";

export const Customer = () => {

    const dispatch = useDispatch();

    const [request, setRequest] = useState("+");

    const [customerInformation, setCustomerInformation] = useState(
        {
            user_id : "",
            name : "",
            email : "",
            confirm_email : "",
            phone_number : "",
            country_of_residence : "",
            booking_for_other : false,
            smoking_preference : "",
            bed_configuration : "",
            room_on_high_floor: false,
            airport_transfer : false,
            quiet_room_preference : false,
            baby_cot_needed : false,
            additional_notes : ""
        }
    );

    function handleChange(e){
        if(e.target.className === "checkbox")
        {
            setCustomerInformation({
                ...customerInformation, [e.target.id] : e.target.checked
            })
        }
        else if(e.target.className === "radio")
        {
            setCustomerInformation({
                ...customerInformation, [e.target.name] : e.target.id
            });
        }
        else
        {
            setCustomerInformation({
                ...customerInformation, [e.target.id] : e.target.value
            });
        }
    }

    function saveCustomerInformation(){
        localStorage.setItem("customerInformation", JSON.stringify(customerInformation));

        // now display payment details to be filled // another mini component
        localStorage.setItem("information", JSON.stringify("payment_information"));
        dispatch(changeInformation("payment_information"));
    }

    return(
        <div>
            <form className="customer__form container">

                <h3>Let us know who you are</h3>

                <div>
                    <label htmlFor="name" className="entry_label">Full name</label>
                    <div>
                        <input type="text" id="name" className="full_size entry" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="entry_label">Email</label>
                    <div>
                        <input type="email" id="email" className="full_size entry" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    </div>
                </div>

                <div>
                    <label htmlFor="confirm__email" className="entry_label" >Retype email</label>
                    <div>
                        <input type="email" id="confirm__email" className="full_size entry" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    </div>
                </div>

                <div id="contact_and_country">
                    <div>
                        <label htmlFor="phone__number" className="entry_label">Phone number (optional)</label>
                        <div>
                            <input type="text" id="phone__number" className="entry" onChange={(e)=>{
                            handleChange(e);
                        }} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="country_of_residence" className="entry_label">Country/region of residence</label>
                        <div>
                            <select id="country_of_residence" className="entry" onChange={(e)=>{
                                handleChange(e);
                            }} >
                                <option value="">--select--</option>
                                <option value="australia">Australia</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="korea">Korea</option>
                                <option value="nepal">Nepal</option>
                                <option value="new-zealand">New Zealand</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="sri-lanka">Sri Lanka</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="checkbox_container">
                    <input type="checkbox" id="booking_for_other" className="checkbox" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    <label htmlFor="booking_for_other">Please tick if you're making this booking for someone else.</label>
                </div>  

                {/* ------------------------------------------------ */}

                <h3 className="h3_margin_top">Let us know what you need</h3>
                <p>Requests are fulfilled on a first come, first served basis. We'll send yours right after you book.</p>
                
                <div id="preference_and_configuration">
                    <div>
                        <p>Do you have a smoking preference?</p>
                        <div id="preference">
                            <div className="radio_container">
                                <input type="radio" className="radio" name="smoking_preference" id="non-smoking" onChange={(e)=>{
                                    handleChange(e);
                                }} />
                                <label htmlFor="non-smoking" className="radio_label">
                                    < FaSmokingBan className="react_icon" />
                                    <span>Non-smoking</span>
                                </label>
                            </div>

                            <div className="radio_container">
                                <input type="radio" className="radio" name="smoking_preference" id="smoking" onChange={(e)=>{
                                    handleChange(e);
                                }} />
                                <label htmlFor="smoking" className="radio_label">
                                    < FaSmoking className="react_icon" />
                                    <span>Smoking</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p>What bed configuration do you prefer?</p>
                        <div id="configuration">
                            <div className="radio_container">
                                <input type="radio" className="radio" name="bed_configuration" id="large__bed" onChange={(e)=>{
                                    handleChange(e);
                                }} />
                                <label htmlFor="large__bed" className="radio_label">
                                    < MdOutlineKingBed className="react_icon" />
                                    <span>I'd like a large bed.</span>
                                </label>
                            </div>

                            <div className="radio_container">
                                <input type="radio" className="radio" name="bed_configuration" id="twin__beds" onChange={(e)=>{
                                    handleChange(e);
                                }} />
                                <label htmlFor="twin__beds" className="radio_label">
                                    <span className="react_icon" >
                                        < MdOutlineSingleBed />
                                        < MdOutlineSingleBed />
                                    </span>
                                    <span>I'd like twin beds.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="request_toggle_container" onClick={()=>{
                    if(request === "+")
                    {
                        setRequest("-");
                    }
                    else
                    {
                        setRequest("+");
                    }
                }}>
                    <span id="request_operator_sign">{request}</span>
                    <span>Click here for more requests</span>
                </div>

                {(request === "+") ? "" : 
                <div id="more_requests_container">
                    <p>We'll make sure your property or host gets your request quickly.</p>

                    <div id="requests">

                        <div className="checkbox_container">
                            <input type="checkbox" id="room_on_high_floor" className="checkbox" onChange={(e)=>{
                                handleChange(e);
                            }} />
                            <label htmlFor="room_on_high_floor">
                                I'd like a room on a high floor.
                            </label>
                        </div>

                        <div className="checkbox_container">
                            <input type="checkbox" id="quiet_room_preference" className="checkbox" onChange={(e)=>{
                                handleChange(e);
                            }} />
                            <label htmlFor="quiet_room_preference">
                                I'd like a quiet room.
                            </label>
                        </div>

                        <div className="checkbox_container">
                            <input type="checkbox" id="airport_transfer" className="checkbox" onChange={(e)=>{
                                handleChange(e);
                            }} />
                            <label htmlFor="airport_transfer">
                                I'd like an airport transfer.
                            </label>
                        </div>

                        <div className="checkbox_container">
                            <input type="checkbox" id="baby_cot_needed" className="checkbox" onChange={(e)=>{
                                handleChange(e);
                            }} />
                            <label htmlFor="baby_cot_needed">
                                I'd like to have a baby cot.
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="addtional__notes" className="entry_label">Additional notes:</label>
                        <div>
                            <textarea id="additional__notes" rows="4" className="entry full_size" onChange={(e)=>{
                                handleChange(e);
                            }}></textarea>
                        </div>
                    </div>

                </div>
                }

            </form>
            <div className="button_container container">
                <p>
                    By proceeding with this booking, I agree to Agoda’s <a href="#" className="anchor">Terms of Use</a> and <a href="#" className="anchor">Privacy Policy</a>.
                </p>
                <button onClick={()=>{
                    saveCustomerInformation();
                }}>NEXT : FINAL STEP</button>
                <span>You won't be charged yet.</span>  
            </div>
        </div>
    );
}