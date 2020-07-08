import React from "react";
import style from './TempData.module.css'

const TempData = (props)=>{
    return (
        <div className={`${style.tempData} flex_c `}>
            <div className={style.tempDataWrapper}>
                <span>{props.value}</span>
                <h2>{props.title}</h2>
            </div>
        </div>)
}
export default TempData
