import { Typography, FormControlLabel,Checkbox } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import "./authStyles.css";
import { Loading } from "./loading";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook} from "react-icons/fa";

import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";


export const Register = () => {
    const [isLoading, setLoading] = useState(false);
    const navigate=useNavigate()
    const [RegisterUser,setRegisterUser]=useState({
        firstname:"",
        lastname: "",
        email: "",
        password: ""
    })

    const handlechange=(e)=>{
        const {id,value}=e.target
         
        setRegisterUser({...RegisterUser,[id]:value})

    }
   
    const handlesubmit= async ()=>{
    setLoading(true)
        try {
          const res = await axios.post("https://agoda-clone.cyclic.app/auth/register",RegisterUser)
          .then((res) => {
            console.log(res)
            setLoading(false)
            navigate("/login")
         
           })
        
        } catch (err) {
          alert("failed")
        }
    

    }


    useEffect( () => {
        setLoading(true);
        let timer = setTimeout(() => {
            setLoading(false);
        },2000);

        // clean-up
        return (() => {
            clearTimeout(timer);
        })
    },[]);

    function onChange(value) {
        console.log("Captcha value: ", value);
    }

    function responseGoogle(response) {
        console.log("successfully registred")
        console.log(response)
        console.log(response.profileObj)
        localStorage.setItem("userDetails", JSON.stringify(response.profileObj));
        }

    return isLoading ? <Loading /> : (
        <>
            {/* <Navbar /> */}
            <div className="resister-page">
                <div className="signup">
                    <Typography variant="h6" style={{fontSize:25, fontWeight:500}} >
                        Signup
                    </Typography>

                    <div className="mode-switch">
                        <div className="auth-active">EMAIL</div>
                        <div className="auth-disabled" >MOBILE</div>
                    </div>

                    <div className="inputs">
                        <label>First name</label>
                        <input type="text" placeholder="First name" id="firstname" onChange={handlechange} />
                    </div>

                    <div className="inputs">
                        <label>Last name</label>
                        <input type="text" placeholder="Last name" id="lastname" onChange={handlechange} />
                    </div>

                    <div className="inputs">
                        <label>Email</label>
                        <input type="email" placeholder="Email" id="email" onChange={handlechange}  />
                    </div>

                    <div className="inputs">
                        <label>Password</label>
                        <input type="password" placeholder="Password" id="password" onChange={handlechange} />
                    </div>

                    <div className="inputs">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" />
                    </div>

                    <div className="confirm" style={{ fontSize: 10 }}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
                        />
                    </div>

                    <div className="captcha">
                        <ReCAPTCHA 
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                    </div>

                    <button className="signup-btn" onClick={handlesubmit} >Sign Up</button>

                    <div className="break">
                        <div className="line"></div>
                        <p>or continue with</p>
                        <div className="line"></div>
                    </div>

                    <div className="google">
                        <FcGoogle style={{ marginRight: 10, width: 25, height: 25 }} />
                        <GoogleLogin
                        clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
                        render={(el) => <button onClick={el.onClick}>Google</button>}
                        buttonText="Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        />
                    </div>

                    <div className="social">
                        <div className="buttons" variant="outlined">
                        <FaApple
                            style={{
                            color: "black",
                            marginRight: 5,
                            width: 20,
                            height: 20,
                            }}
                        />{" "}
                        Apple
                        </div>
                        <div>
                            <FaFacebook
                                style={{ color: "blue", marginRight: 5, width: 23, height: 23 }}
                            />
                            Facebook
                        </div>
                    </div>

                    <div className="line"></div>
                   <br/>
                    <div className="google al">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </div>

                    <p className="By">
                        By signing in, I agree to Agoda's Terms of Use and Privacy Policy.
                    </p>

                </div>
            </div>

            
        </>
    )
}