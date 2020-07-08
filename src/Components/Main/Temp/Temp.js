import React from "react";
import style from './Temp.module.css'
import TempData from "./tempData/TempData";
import {connect} from "react-redux";
import ErrorBoundary from "../../Errors/ErrorBoundary";

const Temp = (props)=>{
    let iconClass = props.description.indexOf("sky") > 0 ?
        props.tempIcon.get("sky") :
        props.description.indexOf("clouds") > 0 ?
            props.tempIcon.get("clouds"):
            props.tempIcon.get("rain")
    console.log(iconClass)
    return(
        <div className={style.tempBlock}>

            <div className={style.tempItemOne}>
                <div className={style.tempWrapper}>
                    <span className={iconClass}></span>
                        <div className={style.tempWrapperWrapper}>
                            <h4>{props.temp} &#8451;</h4>
                            <h4>{props.description}</h4>
                        </div>
                </div>
            </div>

            <div className={style.tempItemTwo}>
                <TempData value={props.high} title={"High"}/>
                <TempData value={props.humidity + " %"} title={"Humidity"}/>
                <TempData value={props.pressure + " mb"} title={"Pressure"}/>
                <TempData value={props.low} title={"Low"}/>
                <TempData value={props.feelsLike} title={"Feels like"}/>
                <TempData value={new Date(props.sunset * 1000).toLocaleTimeString()} title={"Sunset"}/>
            </div>
        </div>
    )
}

let stateToProps = (state)=>({
        tempIcon: state.tempIcon,
        temp: state.mainFrame.temp,
        description: state.mainFrame.description,
        high: state.mainFrame.high,
        low: state.mainFrame.low,
        feelsLike: state.mainFrame.feelsLike,
        humidity: state.mainFrame.humidity,
        pressure: state.mainFrame.pressure,
        sunset: state.mainFrame.sunset
})

export default connect(stateToProps)(ErrorBoundary(Temp))
