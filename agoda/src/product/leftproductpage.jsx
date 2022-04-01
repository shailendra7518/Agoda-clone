import React, { useState } from "react";
import "./leftproductpage.css";
import Checkbox from "@material-ui/core/Checkbox";

export const ProductLeftPage = () => {
    const [check, setCheck] = useState(true);

    const handleChangeCheck = (e) => {
        setCheck(e.target.check);
    }
    return (
        <>
            <div className="checkdiv">
                <div className="mapdivhead">
                    <div className="mapnarrow">
                        <img src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg" alt="mapimage" height="40px" />
                    </div>
                    <div>
                        <img src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg" alt="img" />
                    </div>
                    <div className="mapnarrowtext">
                        <p>SEARCH ON MAP</p>
                    </div>
                </div>
            </div>
            <div className="filterforgoa">
                Popular filters for Goa
            </div>
            <div className="checkdiv">
                <div className="hov">
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png"/> {" "}
                        <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png"/> {" "}
                        <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png"/>
                    </span>
                </div>
                <div className="hov">
                    
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Book now,pay later
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Location:8+ Excellent
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Calangute
                    </span>
                </div>
                <div className="hov">       
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Anjuna
                    </span>
                </div>
                <div className="hov">       
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Bathtub
                    </span>
                </div>
                <div className="hov">       
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        50% discount or more
                    </span>
                </div>
                <div className="hov">       
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Guest rating: 8+ Excellent
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext ">Property type</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Entire apartment (53)
                    </span>
                </div>
                <div className="hov">
                    
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Serviced apartment (2)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Hotel (133)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Resort (34)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Entire villa(25)
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext">Distance to center</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Inside city center (685)
                    </span>
                </div>
                <div className="hov">
                    
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        0-2 km to center (325)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        2-5 km to center (305)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        5-10 km to center (330)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        above 10 km to center (951)
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext">Neighborhood</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Calanguta (382)                       
                        <p style={{color:"GrayText", marginLeft:"42px"}}>Nightlife</p>
                    </span>
                </div>
                <div className="hov">
                    
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Baga (300)
                        <p style={{color:"GrayText", marginLeft:"42px"}}>Shopping, Nightlife</p>
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Candolim (289)
                        <p style={{color:"GrayText", marginLeft:"42px"}}>Nightlife</p>
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext">Location highlights</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Beaches (289)
                    </span>
                </div>
                <div className="hov">
                    
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Adventure (289)
                    </span>
                </div>
                <div className="hov">
                   
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Family fun (289)
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext">Near popular attractions</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Candolim Beach (114)
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

            <div className="checkdiv">
                <div className="hov">
                    <p className="checkdivtext">Beach access</p>
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Public beach (149)
                    </span>
                </div>
                <div className="hov">
                    <span> {" "}
                        <Checkbox color="primary" 
                            inputProps={{"aria-label": "secondaty checkbox"}} 
                            onChange={handleChangeCheck}
                        />
                        Private beach (3)
                    </span>
                </div>
                <br/>
                <div className="borderline"></div>
            </div>

        </>
    )
}