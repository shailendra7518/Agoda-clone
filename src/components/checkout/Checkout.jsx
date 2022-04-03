import { useState } from "react";
import { useSelector } from "react-redux";

import "./checkout.css";
import { Customer } from "./customer/Customer";
import { Payment } from "./payment/Payment";


export const Checkout = () => {

    let information_in_store = useSelector((state) => (state.information.information));

    return (
        <div className="checkout__container">

            <div className="checkout__container-left">
                { (information_in_store === "customer_information") ? < Customer /> : < Payment /> }
            </div>

            <div className="checkout__container-right container">
                right part
            </div>

        </div>
    );
}