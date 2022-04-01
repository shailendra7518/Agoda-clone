import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authAction";

export const login = async (user, dispatch) => {
  console.log("login button1");
  dispatch(loginStart());
  try {
    const res = await axios.post("https://agoda-auth.herokuapp.com/auth/login", user)
    .then((res) => {
      console.log(res)
      dispatch(loginSuccess(res.data));
    })
    console.log("login button1");
    
    
  } catch (err) {
    dispatch(loginFailure());
  }
};