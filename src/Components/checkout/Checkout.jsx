import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./checkout.css";
import { Customer } from "./customer/Customer";
import { Payment } from "./payment/Payment";


export const Checkout = () => {
    const navigate=useNavigate()
let {HotelAddress,HotelName,Numberofroom,Price,Roomimage,Roomtype,Search}=JSON.parse(localStorage.getItem("ReservedRoom"))
    let information_in_store = useSelector((state) => (state.information.information));
   
    //   let auth=JSON.parse(localStorage.getItem("user")) || JSON.parse(localStorage.getItem("userDetails"))
    //   if(!auth){
    //     alert("please login first")
    //        navigate("/login")
    //   }

    return (
        <div className="checkout__container">

            <div className="checkout__container-left">
                { (information_in_store === "customer_information") ? < Customer /> : < Payment /> }
            </div>

            <div className="checkout__container-right container_checkout">
               <div>
                   <img src={Roomimage} style={{width:"400px"}} alt="" />
               </div>
               <div>
               <h3>
                     Hotel Name  &nbsp;<span style={{color:"cornflowerblue"}}>{HotelName}</span>
                   </h3>
                   <br />
                   <h4>
                     HotelAddress  &nbsp;<span style={{color:"cornflowerblue"}}>{HotelAddress}</span>
                   </h4>
                   <br />
                   <h2> Room Type <span style={{color:"red"}}>{Roomtype}</span></h2>
               </div>
               <div>
                   <h3>Check in date &nbsp; <span style={{color:"tomato"}}>{Search.start_date}</span></h3>
                   <h3>Check out date &nbsp;<span style={{color:"tomato"}}>{Search.end_date}</span></h3>
               </div>
               <div>
                 
                   <h3>Adult :{Search.adult}</h3>
                   <h3>Rooms :{Numberofroom}</h3>
               </div>
               <div><h2> Checkout Price &nbsp;<span style={{backgroundColor:"cornflowerblue",padding:"5px",color:"white",borderRadius:"5px"}}>{Price*Number(Search.adult)*Number(Numberofroom)}</span></h2></div>

            </div>

        </div>
    );
}