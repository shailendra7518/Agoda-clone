import "./payment.css";

import {RiSecurePaymentFill} from "react-icons/ri";

import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import {FaCcJcb} from "react-icons/fa";
import {FaCcAmex} from "react-icons/fa";
import {FaCcDiscover} from "react-icons/fa";
import {FaCcDinersClub} from "react-icons/fa";
import {FaCcPaypal} from "react-icons/fa";
import {BsDot} from "react-icons/bs";
import {AiFillLock} from "react-icons/ai";
import {MdOutlineMarkEmailRead} from "react-icons/md";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeInformation } from "../../../redux/checkoutChildComponent/action";

import { useNavigate } from "react-router-dom";


export const Payment = () => {  

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("card_payment");

    const customerInformation = JSON.parse(localStorage.getItem("customerInformation"));

    const [paymentInformation, setPaymentInformation] = useState({
        payment_method : "",
        card_holder_name : "",
        card_number : "",
        card_expiry_date: "",
        cvv : ""
    });

    function handleChange(e){
        setPaymentInformation({
            ...paymentInformation, [e.target.id] : e.target.value
        });
    }

    function saveBookingDetails(){
        let bookingDetails = {...customerInformation, ...paymentInformation};
        localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
        Navigate("/");
    }

    return (
        <div id="main_container"> 

            <div className="container encryption__message__container">
                <span>
                    < RiSecurePaymentFill className="secure_payment_icon"/>
                    <span>
                        Secure payment
                    </span>
                </span>

                <span>
                    All card information is fully encrypted, secure and protected.
                </span> 
            </div>

            {/* --------------------------------------------------------------------- */}

            <div className="container">

                <div>
                    <label htmlFor="card" className="card_label">
                        <input type="radio" name="payment_method" id="card" className="payment_method" onChange={()=>{
                            setPaymentMethod("card_payment");
                        }} />
                        <div className="payment_container">
                            <span className = "title" >
                                CREDIT/DEBIT CARD
                            </span>
                            <div  className="payment_icons_container">
                                < FaCcVisa className="icon" />
                                < FaCcMastercard className="icon" />
                                < FaCcJcb className="icon" />
                                < FaCcAmex className="icon" />
                                < FaCcDiscover className="icon" />
                                < FaCcDinersClub className="icon" />
                            </div>
                        </div>
                    </label>
                </div>

                {(paymentMethod === "card_payment") ? 
                <div id="card_details_container">

                    <div>
                        <label htmlFor="payment_method" className="entry_label">Select payment method</label>
                        <select id="payment_method" className="entry full_size" onChange={(e)=>{
                            handleChange(e);
                        }} >
                            <option value="visa">Visa</option>
                            <option value="mastercard">Mastercard</option>
                            <option value="jcb">JCB</option>
                            <option value="amex">Amex</option>
                            <option value="discover">Discover</option>
                            <option value="diners">Diners</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="card_holder_name" className="entry_label">Card holder name</label>
                        <input type="text" id="card_holder_name" className="entry full_size" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    </div>

                    <div>
                        <label htmlFor="card_number" className="entry_label">Credit/debit card number</label>
                        <input type="text" id="card_number" className="entry full_size" onChange={(e)=>{
                            handleChange(e);
                        }} />
                    </div>

                    <div id="cvv_container">
                        <div>
                            <label htmlFor="card_expiry_date" className="entry_label">Expiry date</label>
                            <input type="text" id="card_expiry_date" className="entry full_size" placeholder="MM/YY" onChange={(e)=>{
                            handleChange(e);
                        }} />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="entry_label">CVC/CVV</label>
                            <input type="text" id="cvv" className="entry full_size" onChange={(e)=>{
                            handleChange(e);
                        }} />
                        </div>
                    </div>

                </div> : ""}

                {/* -------------------------------------------------------------------- */}

                <div>
                    <label htmlFor="digital_payment" className="card_label" id="digital_payment_container">
                        <input type="radio" name="payment_method" id="digital_payment" className="payment_method" onChange={()=>{
                            setPaymentMethod("digital_payment");
                        }} />
                        <div className="payment_container">
                            <span className = "title" >
                                DIGITAL PAYMENT
                            </span>
                            <div  className="payment_icons_container">
                                < FaCcPaypal className="icon" />
                            </div>
                        </div>
                    </label>
                </div>

                {(paymentMethod === "digital_payment") ? 
                <div id="digital_payment_details_container">

                    <div>
                        <label htmlFor="digital_payment_method" className="entry_label">Select payment method</label>
                        <select id="digital_payment_method" className="entry full_size" >
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    <div className="digital_payment_information_container">
                        <div className="digital_payment_information">
                            < BsDot className="dot"/>
                            <span>
                                You have chosen to pay by <span className="word">PayPal</span>. You will be forwarded to the <span className="word">PayPal</span> website to proceed with this transaction.
                            </span>
                        </div>
                        <div className="digital_payment_information"> 
                            < BsDot className="dot" />
                            <span>
                                The total amount you will be charged is: <span className="word booking_amount">$90.00</span>
                            </span>
                        </div>
                    </div>

                </div> : ""}

                {/* ---------------------------------------------------------------- */}

                <div className="button_container last_container">
                    <p>
                        By proceeding with this booking, I agree to Agoda’s <a href="" className="anchor">Terms of Use</a> and <a href="" className="anchor">Privacy Policy</a>.
                    </p>
                    <button id="payment_button" onClick={()=>{
                        saveBookingDetails();
                    }}>
                        < AiFillLock className="lock_icon" /> <span>BOOK NOW!</span>
                    </button>
                    <span>Final step for booking.</span>
                </div>

            </div>

            {/* ------------------------------------------------------------- */}

            <div className="container confirmation_mail_container">
                < MdOutlineMarkEmailRead />
                <div>
                    We'll send confirmation of your booking to <span className="word">{customerInformation.email}</span>
                </div>
            </div>

            {/* ------------------------------------------------------------------- */}

            <div>
                <button className="back_to_booking_detials_btn" onClick={()=>{
                    dispatch(changeInformation("customer_information"));
                }} >
                    Back to your booking details
                </button>
            </div>


        </div>
    );
}