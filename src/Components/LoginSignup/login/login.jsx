import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import React, {useState, useEffect, useContext, useRef} from "react";
import { Loading } from "./loading";
import "./authStyles.css";

import { loginFailure, loginStart, loginSuccess } from "../authContext/authAction"
import {  useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../authContext/authContext";
import axios from "axios";
import { login } from "../authContext/apiCalls";

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const { dispatch} = useContext(AuthContext)


          const navigate=useNavigate()

      

    const googlee = useRef();

    const handleLogin = () => {
        console.log("login button");
        login({email,password}, dispatch);
      
    }

    useEffect(() => {
        setLoading(true);
        let timer = setTimeout(() => {
            setLoading(false);
           
        },2000);

        // clean-up
        return(() => {
            clearTimeout(timer);
        })
    },[])

    function responseGoogle(response){
        console.log("Success")
        console.log(response)
        console.log(response.profileObj)
        // Auth.user = res;
        localStorage.setItem("userDetails", JSON.stringify(response.profileObj));
      
        // Auth.toggle(!Auth.isAuth);
       
       

    }
    
        // if(Auth.isAuth) {
        //     return <Redirect to="/" />
        // }
    
    
    return isLoading ? <Loading /> : (
        <>
            {/* <Navbar /> */}
            <div className="resister-page">
                <div className="signup">
                    <Typography variant="h5">Sign in</Typography>
                    <br/>
                    <Typography variant="subtitle1" >For security, please sign in to access your information</Typography>
                    <div className="mode-switch">
                        <div className="auth-active">EMAIL</div>
                        <div className="auth-disabled">MOBILE</div>
                    </div>

                    <div className="inputs">
                        <label>Email</label>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="inputs">
                        <label>Password</label>
                        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="confirm" style={{ marginTop: 20 }}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
                        />
                    </div>

                    <button className="signup-btn"
                       
                        onClick={() =>{
                            
                            handleLogin()
                            
                        }
                         }
                         >Sign In</button>

                    <div className="break">
                        <div className="line"></div>
                        <p> or sign in with </p>
                    </div>

                    <div className="google">
                        <FcGoogle style={{marginRight:10, width:25, height:25}} />
                        <GoogleLogin style={{height:20}} ref={googlee} 
                            clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
                            render={(el) => <button onClick={el.onClick}>Google</button>}
                            buttonText="Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
                    </div>

                    <div className="social">
                        <div>
                            <FaApple style={{marginRight:5,width:20,height:20,color:"black"}} />
                            {" "}
                            Apple
                        </div>

                        <div>
                            <SiFacebook style={{marginRight:5,width:22,height:22,color:"blue"}} />
                            {" "}
                            Facebook
                        </div>
                    </div>

                    <div className="line1"></div>
                    <p className="By">By signing in, I agree to Agoda's Terms of Use and Privacy Policy.</p>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}