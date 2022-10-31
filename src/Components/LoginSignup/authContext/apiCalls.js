import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToReach } from "../../Routes/Rerender";
import { loginFailure, loginStart, loginSuccess } from "./authAction";

export const login = async (user, dispatch) => {
  
  dispatch(loginStart());
  
  try {
  axios.post("https://agoda-clone.cyclic.app/auth/login", user)
    .then((res) => {
      
    console.log(res.data)
      dispatch(loginSuccess(res.data));
    
    })
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const Registeruser=async(user)=>{
  try {
    axios.post("https://agoda-clone.cyclic.app/auth/register", user)
    .then((res) => {
      console.log(res)

     })

  } catch (err) {
    
  }

}