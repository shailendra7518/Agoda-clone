import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataSuccess,
  searchDataFailure,
  searchDataRequest,
  searchDataSuccess,
} from "../productRedux/action";

import { Box } from "@material-ui/core";
import styles from "./productpage.css";

import Paper from "@material-ui/core/Paper";
import axios from "axios";
// import { ProductLeftPage } from "./leftproductpage";
// import { Switch } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import {Sortingdiv} from "../product/Sortingdiv";
import { AppContext } from "../LoginSignup/context/provider";
 import { Loading } from "../LoginSignup/login/loading";
 import { Footer } from "../LoginSignup/footer/footer";
 import { Navbar } from "../LoginSignup/navbar/navbar";
 import { BsStarFill} from "react-icons/bs";
 import { IoIosPin } from "react-icons/io";
import { TopHidden } from "../TopHiddenNav/TopHidden";
import { FilterPart } from "../FIlter/Filter";
import { LeftBox } from "./LeftBox";

export const ProductPage = () => {
    const [clicked, setClicked] = useState(false);
    const state = useSelector((state) => state.hoteldata);
    const [loading, setloading] = useState(false);
  const navigate=useNavigate()
    console.log(state);
    const dispatch = useDispatch();
  
    const searchedCity  = useContext(AppContext);
  const handelsave=(data)=>{
         localStorage.setItem("SingleHotel",JSON.stringify(data))
         navigate("/discription")
  }

    let searchData=JSON.parse(localStorage.getItem("Searchdata"))
    console.log(searchData.destination)

//  useEffect(()=>{
//    setloading(true)
//      axios.get(`https://blooming-brook-61650.herokuapp.com/findhotels/${searchData.destination}`)
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     let hotels=response.data
//     localStorage.setItem("Allhotels",JSON.stringify(hotels))
//     setloading(false)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
  
//  },[])

  let arr=["Excellent","Exeptional","Very good"]
 let allhotes=JSON.parse(localStorage.getItem("Allhotels"))




     return loading ? (<Loading/>) :( <>
  <TopHidden/>
  <FilterPart/>

      <div className="product_main_container">

        <div className="product_left_div">
          <LeftBox/>
        </div>
        <div className="product_right_div">
         <div className="right_top">
          <button className="sort_button_product">Sort</button>
          <button className="sort_button_product">BEST MATCH</button>
          <button className="sort_button_product">Top Revieved</button>
          <button className="sort_button_product">Lowest price first</button>
          <button className="sort_button_product">Distance</button>
        </div>

        <div className="product_right_All_card">
             {allhotes.map((hotel,index)=>{

                return <>
                
               <div className="each_card">
            
                    <div className="small_card">
                      <img src={hotel.main_image} alt="" />
                      <div className="small_room">
                          {hotel.room.map((url)=>{
                            return <img src={url} alt="" />
                          })}
                      </div>
                    </div>
                    <div className="small_card middle">
                      <h3 style={{margin:"0px",padding:"0px"}}>{hotel.hotel_name}</h3>
                      <div style={{color:"orange"}}><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/></div>
                      <td style={{color:"cornflowerblue"}}><IoIosPin/>{hotel.hotel_address}</td>
                      <th>{hotel.brand_name}</th>
                    </div>
                    <div className="small_card last">
                      <p>{arr[index%arr.length]}</p>
                      <h1> Rs/&nbsp; <span style={{color:"red"}}>{hotel.price}</span></h1>
                      <button className="room_button" onClick={()=>{
                        handelsave(hotel)
                      }}>Select Room</button>
                    </div>




               </div>
               
               
               
               
               
                </>



             })}
          
        </div>
        </div>

</div>

</>

     )



  
    };