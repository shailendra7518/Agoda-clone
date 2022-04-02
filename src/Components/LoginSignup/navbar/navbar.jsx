import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Avatar,Button} from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
// import { IsAuth } from "../context/auth";
import "./navbar.css";


const useStyles = makeStyles({
    primary : {
        fontSize : "14px",
        margin : "12px",
        textTransform : "capitalize",
        padding: "10px 20px",
        borderRadius : "6px",
        "&:hover" : {
            backgroundColor : "#87B3FB",
            color : "#fff",
            border : "1px solid #87B3FB"
        }
    },
    secondary : {
        fontSize : "14px",
        margin : "12px",
        textTransform : "capitalize",
        padding: "10px 20px",
        borderRadius : "6px",
        "&:hover" : {
            backgroundColor : "#FF567D",
            color : "#fff",
            border : "1px solid #FF567D"
        }
    },
    
});

export const Navbar = () => {
    const classes = useStyles();

   // const auth = useContext(IsAuth);

    // let userData = JSON.parse(localStorage.getItem("userDetails")) || {};
    let userdet=JSON.parse(localStorage.getItem("user"))
    return(
        <>
       
            <div className="navbar">
                <div className="navbar_left">
                    <Link to="">
                        <img className="header_logo" src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="logo" />
                    </Link>
                    <div>
                        <p>Flight + Hotel</p>
                    </div>
                    <div>
                        <p>Hotels & Homes</p>
                    </div>
                    <div>
                        <p>Flights</p>
                    </div>
                    <div>
                        <p>Today's deals</p>
                        
                    </div>
                    <div className="flex">
                        <ApartmentIcon />
                        <p>Apartments</p>
                    </div>
                    <div className="dropMenu">
                        <MoreHorizIcon className="moreIcon" />
                        <div className="dropdown">
                            <a href="#" >Airport Transfers</a>
                            <a href="#" >Car Rentals</a>
                            <a href="#" >Things to do</a>
                        </div>
                    </div>
                </div>

                <div className="navbar_right">
                    <Button className={classes.secondary} variant="outlined" color="secondary" >
                        List your place</Button>
                    
                    {/* {auth.isAuth ? (
                        <>
                            <Avatar src={auth.isAuth ? userData.imageUrl : ""} />
                            <p>{auth.isAuth ? userData.givenName : ""}</p>

                            <Button onClick={() => auth.toggle(!auth.isAuth)} className={classes.primary} variant="outlined" color="primary" >
                                Sign out</Button>
                        </>
                    ) : 
                    (
                        
                    )} */}

                        <>
                            <Link to="/login" style={{textDecoration: "none"}}>
                                <Button className={classes.primary} color="primary" >{userdet ? userdet.firstname :"Sign in"}</Button>
                            </Link>

                            <Link to="/register" style={{textDecoration: "none"}}>
                                <Button className={classes.primary} variant="outlined" color="primary" >Create account</Button>
                            </Link>
                        </>
                </div>
            </div>
        </>
    )
}