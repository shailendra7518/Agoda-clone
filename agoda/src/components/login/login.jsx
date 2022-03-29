import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import "./authStyles.css";
import { Redirect } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

export const Login = () => {
    return (
        <>
            <Navbar />
            <div className="resister-page">
                <div className="signup">
                    <Typography>Sign in</Typography>
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
                
                </div>
            </div>
        </>
    )
}