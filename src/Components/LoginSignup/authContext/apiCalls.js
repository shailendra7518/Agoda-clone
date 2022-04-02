import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToReach } from "../../Routes/Rerender";
import { loginFailure, loginStart, loginSuccess } from "./authAction";

export const login = async (user, dispatch) => {
  
  console.log("login button1");
  dispatch(loginStart());
  try {
    const res = await axios.post("https://mycorsproxy-forauth.herokuapp.com/https://agoda-auth-api.herokuapp.com/auth/login", user)
    .then((res) => {
      
    console.log(res)
      dispatch(loginSuccess(res.data));
    
    })

    console.log("login button1");
    
    
  } catch (err) {
    dispatch(loginFailure());
  }


  // axios.post('https://mycorsproxy-forauth.herokuapp.com/https://agoda-auth-api.herokuapp.com/auth/login',user)
  // .then(function (response) {
  //   console.log(response);
  // }).then(()=>{
  //   let navigate=ToReach()
  //      navigate('/')
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });




};

export const Registeruser=async(user)=>{
  // let navigate=ToReach()
  //     navigate('/login')
  try {
    const res = await axios.post("https://mycorsproxy-forauth.herokuapp.com/https://agoda-auth-api.herokuapp.com/auth/register", user)
    .then((res) => {
      console.log(res)

    
   
     })

      
   
    
    
  } catch (err) {
    
  }

}