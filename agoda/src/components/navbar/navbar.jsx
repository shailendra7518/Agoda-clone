import React from "react";
import { Link } from "react-router-dom"
import {Avatar,Box,Button} from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";

export const Navbar = () => {
    return(
        <>
            <div>
                <div>
                    <Link to="/" >
                        <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="logo" />
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
                    <div>
                        <ApartmentIcon />
                        <p>Apartments</p>
                    </div>
                </div>
            </div>
        </>
    )
}