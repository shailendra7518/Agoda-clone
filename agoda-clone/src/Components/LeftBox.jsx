import React, { useState } from "react";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import style from "./LeftBox.module.css";

export const LeftBox = () => {
    const [, setChecked] = useState(true)

    
    const handleChange = (event) => {
        setChecked(event.target.checked)
    };

    return (
        <>
        <div className={style.check}>
            <div className={style.map}>
                <div className={style.maparrow}>
                    <img src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg" alt="" height="10px"/>
                </div>
                <div>
                    <img src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg" alt="" />
                </div>
                <div>
                    <p>SEARCH ON MAP</p>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p></p>
            </div>
        </div>
        </>
    )
}


