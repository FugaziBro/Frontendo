import React, {useEffect, useState} from "react";
import style from './FooterItem.module.css'
import {baseRequest} from "../../../../Storage/ActionCreators";
import {connect} from "react-redux";

const FooterItem = (props)=>{
    let arr = [
        "mdi mdi-weather-partly-cloudy",
        "mdi mdi-weather-cloudy",
        "mdi mdi-weather-lightning-rainy"
    ]
    let [random,setRandom] = useState(0)
    useEffect(()=>{
        random = setRandom(Math.round(Math.random()*(arr.length-1)))
        },random)
    return(
        <div className={style.item}
            onClick={()=>props.dispatch(baseRequest(props.city))}>
            <span className={`${style.icon} ${arr[random]}`}></span>
            <div className={style.city}>{props.city}</div>
        </div>
    )
}

let dispatchToProps = (dispatch)=>({
    onItemClick : (city)=>dispatch(baseRequest(city))
})

export default connect(dispatchToProps)(FooterItem)
