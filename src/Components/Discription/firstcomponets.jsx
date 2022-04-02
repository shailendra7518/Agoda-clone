import axios from "axios";
import { useEffect, useState } from "react";
import { TopHidden } from "../TopHiddenNav/TopHidden";
import "../Discription/secoundcomponents.css"
import "./Firstcomponents.css"
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export const Firstcomponent = () => {
  const [data, setData] = useState([]);
const navigate=useNavigate()
  const getFormData = () => {
    axios.get("http://localhost:3002/hotel").then(res => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getFormData();
  }, []);
  

//   console.log(data);
//  let hotel= [
//     {
//       "image":[
//           {"image1":"https://bit.ly/3wUkgds"},
//           {"image2":"https://bit.ly/3NMoR7N"},
//           {"image3":"https://bit.ly/3JW6fQe"},
//           {"image4":"https://bit.ly/3ISYbyn"}
//       ],
//       "name": "Devesh Verma",       
//       "age": "21",
//       "address": "pathan ka bagg, Dhamera Adda bulandshahr",
//       "salary": "45000",
//       "department": "IT",
//       "id": 1
//     }
     
//   ]
const [Numberofroom,setNumberofroom]=useState("1")

let roomtype=["Luxury King Room","Luxury Premium Room","Deluxe Suite - Free One-Way Airport Transfer","Residence","Single Luxury"]
let {room,price,hotel_name,hotel_address}=JSON.parse(localStorage.getItem("SingleHotel"))




  return (
    <>
     <TopHidden/>

    
          <div className="myfirstdiv">
            <div className="myfirstdiva">
            
                
                    <div className="myfirstdiva1">
                      <img src={room[4]} alt="" />
                    </div>
                    <div className="myfirstdiva2">
                      <img src={room[1]} alt="" />
                    </div>
                    <div className="myfirstdiva3">
                      <img src={room[2]} alt="" />
                    </div>
                    <div className="myfirstdiva4">
                      <img src={room[3]} alt="" />
                    </div>
                  
              
            </div>
            <div className="myfirstdivb">
              <h1>{hotel_name} </h1>
              <h3>{hotel_address}</h3>
             
            </div>
            <div className="myfirstdivc">
                <img src="https://i.ibb.co/Ws23VRD/Screenshot-2022-03-31-134644.jpg" alt="" />
            </div>
            <div className="wifi"><img src="https://i.ibb.co/SV3mdZW/action-plate.jpg" alt="" /></div>
          </div>
       
     


       <div className="contaienr">
        <h2>Select Your Room </h2>
        <h3>Room Types | with offers </h3>
       {  room.map((ele,index)=>{
         return <>

       
         <div className="god_div">
        <div className="mainmapdiv">
         
            <div className="mainmapdiv1">
                <div>
                    <h3>{roomtype[index]}</h3>
                </div>
                <div><img src="https://i.ibb.co/qDttZdz/Screenshot-2022-04-01-020144.jpg" alt="" /></div>
            </div>
            <div className="mainmapdiv2">
                <div><img src={ele} alt="" /></div>
        
                <div><img src="https://i.ibb.co/b5gd6C9/Screenshot-2022-04-01-021349.jpg" alt="" /></div>
            </div>
            <div className="mainmapdiv3">
                <div>
                    <h4>Benifits</h4>
                    <hr />
                    <h4>Your Price Include</h4>
                    <h5>✔️Free WiFi</h5>
                    <h5>✔️Pay nothing until April 06, 2022</h5>
                    <h5>✔️Free cancellation before April 08, 2022</h5>
                </div>
                <div className="sleeps">
                    <h4>Sleeps</h4>
                    <hr />
                    <MdFamilyRestroom fontSize={"3vw"} style={{textAlign:"center"}}/>
                    <p>  {Math.floor(Math.random() * ((3) - (2) + 1)) + (1)} kid under 2 year stay Free</p>
                </div>
                <div>
                    <h4>Pricr per nighy</h4>
                    <hr />
                    <h5>SAVE {Math.floor(Math.random() * ((60) - (10) + 1)) + (10)}% TODAY!</h5>
                     <span>Rs. <del>{3000+Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500)}</del></span>
                     <h1 style={{color:"tomato"}}>Rs.&nbsp;{Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500)}</h1>
                </div>
                <div >
                  <select name="" id=""  style={{height:"50px",alignItems:"center",width:"50px",fontSize:"1.5vw",marginLeft:"60px"}} onChange={(e)=>{

                    setNumberofroom(e.target.value)
                  }} >
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">1</option>
                    <option value="4">1</option>
                  </select>
                </div>
                <div>
                    <h4>most per booked</h4>
                    <hr />
                    <button onClick={()=>{
                    let paylod={
                      Roomimage:ele,
                      Roomtype:roomtype[index],
                      Price:3000+Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500),
                      Numberofroom:Numberofroom,
                      HotelAddress:hotel_address,
                      HotelName:hotel_name,
                      Search:JSON.parse(localStorage.getItem("Searchdata"))

                    }
                    localStorage.setItem("ReservedRoom",JSON.stringify(paylod))
                       navigate("/checkout")

                    }}>Reserve</button>
                </div>
            </div>
            <div className="mainmapdiv4">
            <div>
                    
                    <h4>Your Price Include</h4>
                    <h5>✔️Free WiFi</h5>
                    <h5>✔️Pay nothing until April 06, 2022</h5>
                    <h5>✔️Free cancellation before April 08, 2022</h5>
                </div>
                <div className="sleeps">
                  
                    <hr />
                    <MdFamilyRestroom fontSize={"3vw"} style={{textAlign:"center"}}/>
                    <p>  {Math.floor(Math.random() * ((3) - (0) + 1)) + (2)} kid under 2 year stay Free</p>
                </div>
                <div>
                    
                    <h5>SAVE {Math.floor(Math.random() * ((60) - (10) + 1)) + (10)}% TODAY!</h5>
                     <span>Rs. <del>{5000+Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500)}</del></span>
                     <h1 style={{color:"tomato"}}> Rs.&nbsp;{1000+Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500)}</h1>
                </div>
                <div>
              
                </div>
                <div>
                  
                    <button onClick={()=>{
  let paylod={
    Roomimage:ele,
    Roomtype:roomtype[index],
    Price:3000+Math.floor(Math.random() * ((price+500) - (price-500) + 1)) + (price-500),
    Numberofroom:Numberofroom,
    HotelAddress:hotel_address,
    HotelName:hotel_name,
    Search:JSON.parse(localStorage.getItem("Searchdata"))

  }
  localStorage.setItem("ReservedRoom",JSON.stringify(paylod))
     
  navigate("/checkout")
                    }} >Reserve</button>
                </div>
            </div>
            
        </div>
        </div>
        </>
        })
    }
       </div>
    </>
  );
};
