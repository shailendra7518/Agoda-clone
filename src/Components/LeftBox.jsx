import React from "react";
// import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

import "./LeftBox.css";

export const LeftBox = () => {
    // const [, setChecked] = useState(true)


    // const handleChange = (event) => {
    //     setChecked(event.target.checked)
    // };

    return (
        <>
            <div className="check">
                <div className="map">
                    <div className="maparrow">
                        <img src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg" alt="" height="30px" />
                    </div>

                    <img src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg" alt="" />


                    <p className="captionOverImage">SEARCH ON MAP</p>

                </div>
                <div className="para">
                    <p style={{width:"40%"}}>Popular filters for Goa</p>
                    <p style={{width: "27%"}}>Price per night</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="star">
                                <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png" />
                                <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png" />
                                <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png" />
                                <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png" />
                                <img src="https://img.icons8.com/tiny-color/16/000000/experimental-star-tiny-color.png" />
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Guest rating: 9+ Exceptional
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Guest rating: 8+ Exceptional
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Anjuna
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Palolem
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Baga
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Beaches
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Baga Beach
                            </span>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>
                <div className="filterhead">
                    <p style={{width:"30%"}}>Property Types</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Homestay (6)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Entire house (10)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Entire apartment (52)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Hotel (85)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Service apartment (2)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            {/* <span className="checkboxIcon"><input type="checkbox" /></span> */}
                            <a href="/" className="filterText">Show 12 more<i class="fas fa-sort-down"></i></a>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>

                <div className="filterhead">
                    <p style={{width:"36%"}}>Distance to center</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Inside city center (61)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                2 km to center (37)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                2-5 km to center (43)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                5-10 km to center (44)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                10 km to center (143)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>
                <div className="filterhead">
                    <p style={{width:"30%"}}>Neighborhood</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Candolim Nightlife(39) <br />
                                
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                               Panaji (10)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Arambol Beach (11)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            {/* <span className="checkboxIcon"><input type="checkbox" /></span> */}
                            <a href="/" className="filterText">Show 23 more<i class="fas fa-sort-down"></i></a>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>

                <div className="filterhead">
                    <p style={{width:"38%"}}>Location highlights</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Shopping area (39)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Adventure (170)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Religious interests (51)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Casinos(10)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            {/* <span className="checkboxIcon"><input type="checkbox" /></span> */}
                            <a href="/" className="filterText">Show 10 more<i class="fas fa-sort-down"></i></a>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>

                <div className="filterhead">
                    <p style={{width:"48%"}} >Near popular attractions</p>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Candolim Beach (18)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Baga Beach (15)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Palolem Beach (15)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            {/* <span className="checkboxIcon"><input type="checkbox" /></span> */}
                            <a href="/" className="filterText">Show 6 more<i class="fas fa-sort-down"></i></a>
                        </li>
                    </div>
                </div>
                <div className="borderline"></div>
                <div className="filterhead">
                    <p style={{width: "26%"}}>Beach access</p>
                </div>

                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                                Public beach (112)
                            </span>
                        </li>
                    </div>
                </div>
                <div className="filterMain">
                    <div>
                        <li className="listFilter">
                            <span className="checkboxIcon"><input type="checkbox" /></span>
                            <span className="filterText">
                               Private beach (13)
                            </span>
                        </li>
                    </div>
                </div>
                
            </div>



        </>
    )
}


