import React from "react";
import "./Filter.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export const Filter = () => {
    return (

        <div className="Filterparent">
            <div className="filter">
                <p className="parafilter">Filter</p>
                <div class="dropdown">
                    <button class="dropbtn"> Quarantine Offers <i class="fas fa-sort-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/">All hotels</a>
                        <a href="/">Quarantine hotels</a>
                        <a href="/">Non-quarantine</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Price <i class="fas fa-sort-down"></i> </button>
                    <div class="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Star ratings <i class="fas fa-sort-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Property facility <i class="fas fa-sort-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Property types <i class="fas fa-sort-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
                </div>
                <div className="search">
                < SearchOutlinedIcon />
                <input
                    className="searchbox"
                    type="text"
                    placeholder="text search" />
            </div>
            </div>
            
        </div>
        // <div className={style.Filterparent}>
        //     <div className={style.filter}>
        //         <div className={style.filterbuttons}>
        //             <span className={style.filterlabel}>Filter</span>
        //             <button className={style.btn1}>
        //                 Quarantine Offers <i class="fas fa-sort-down"></i>
        //             </button>
        //             <button className={style.btn2}>
        //                 Price <i class="fas fa-sort-down"></i>
        //             </button>
        //             <button className={style.btn3}>
        //                 Star ratings <i class="fas fa-sort-down"></i>
        //             </button>
        //             <button className={style.btn4}>
        //                 Property facilities <i class="fas fa-sort-down"></i>
        //             </button>
        //             <button className={style.btn5}>
        //                 Property types <i class="fas fa-sort-down"></i>
        //             </button>
        //         </div>


        //     </div>
        // </div>
    )
}