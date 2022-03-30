import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import React, {useState, useEffect, useContext, useRef} from "react";
import { Loading } from "./loading";
import "./authStyles.css";
import {IsAuth} from "../context/auth";
import {Navbar} from "../navbar/navbar.jsx";
import {Footer} from "../footer/footer.jsx";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc"

export const Login = () => {
    const [isLoading, setLoading] = useState(false);
    const Auth = useContext(IsAuth);
    const googlee = useRef();

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

    function responseGoogle(res){
        Auth.user = res;
        localStorage.setItem("userDetails", JSON.stringify(res.profileObj));
        Auth.toggle(!Auth.isAuth);

    }
    if(Auth.isAuth) {
        return <Redirect to="/" />
    }

    return isLoading ? <Loading /> : (
        <>
            <Navbar />
            <div className="resister-page">
                <div className="signup">
                    <Typography>Sign in</Typography>
                    <Typography variant="p" >For security, please sign in to access your information</Typography>
                    <div className="mode-switch">
                        <div className="auth-active">EMAIL</div>
                        <div className="auth-disabled">MOBILE</div>
                    </div>

                    <div className="inputs">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="inputs">
                        <label>Password</label>
                        <input type="password" placeholder="First Name" />
                    </div>

                    <div className="confirm" style={{ marginTop: 20 }}>
                        <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
                        />
                    </div>

                    <button className="signup-btn">Sign Up</button>

                    <div className="break">
                        <div className="line"></div>
                        <p>or sign in with</p>
                    </div>

                    <div className="google">
                        <FcGoogle style={{marginRight:10, width:25, height:25}} />
                        <GoogleLogin style={{height:20}} ref={googlee} buttonText="Google"
                            clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
                            render={(el) => <button onClick={el.onClick}>Google</button>}
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

            <Footer />
        </>
    )
}