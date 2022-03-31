
import React from "react";
import style from "./Sort.module.css";

export const Sort = () => {
    const handleSort = () => {
        console.log("Hello")
    }

    const handlereview = () => {
        console.log("Masai");
    }
    return (
        <div className={style.sort}>
            <div className={style.sortChild1}>
                <p>Sort</p>
            </div>
            <button className={style.sortChild2}>
                <p className={style.btntext2}>BEST MATCH</p>
            </button>
            <button onClick={handlereview}>
                <p>Top Reviewed</p>
            </button>
            <button onClick={handleSort}>
                <p>Lowest price first</p>
            </button>
            
            <button className={style.sortchild5}>
                <p>Secret deals</p>
            </button>
        </div>
    )
}