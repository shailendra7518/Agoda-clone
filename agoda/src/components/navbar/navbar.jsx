import React from "react";
import { Link } from "react-router-dom";
import {Avatar,Button} from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";
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
                    
                    <Link to="" style={{textDecoration: "none"}}>
                        <Button className={classes.primary} color="primary" >Sign in</Button>
                    </Link>

                    <Link to="" style={{textDecoration: "none"}}>
                        <Button className={classes.primary} variant="outlined" color="primary" >Create account</Button>
                    </Link>

                </div>
            </div>
        </>
    )
}